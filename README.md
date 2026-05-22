# ETL Agent MVP

基于 LLM 的 ETL 流智能构建与优化 Agent，使用 Node.js / TypeScript 实现。

## 功能

- **从 0 构建 ETL 流**：输入自然语言需求，自动生成 ETL DAG
- **优化已有 ETL 流**：分析现有 ETL 图，识别冗余节点，给出优化建议和 diff

## 快速开始

```bash
npm install
cp .env.example .env
# 编辑 .env 填入你的 LLM API Key
npm run dev
```

## 接口

### POST /api/etl/build

输入自然语言需求，生成 ETL 图。

```json
{
  "userRequirement": "统计最近30天每个地区销售额最高的前10个用户",
  "availableTables": [
    {
      "tableName": "orders",
      "columns": ["order_id", "user_id", "region", "amount", "status", "created_at"]
    }
  ]
}
```

### POST /api/etl/optimize

输入已有 ETL 图，输出优化建议和优化后的图。

```json
{
  "goal": "可选，用户补充目标",
  "graph": {
    "nodes": [],
    "edges": []
  }
}
```

## 项目结构

```
src/
├── domain/         # 核心类型定义
├── operators/      # 算子注册表和文档
├── graph/          # ETL 图校验、diff、渲染
├── llm/            # LLM 客户端抽象
├── agent/          # Agent 逻辑和 Prompt
└── api/            # Express 路由
```

## 环境变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `OPENAI_API_KEY` | OpenAI API Key | 必填 |
| `OPENAI_BASE_URL` | 自定义 API 地址（可接入百炼、火山等兼容服务） | OpenAI 官方 |
| `OPENAI_MODEL` | 使用的模型名 | `gpt-4o-mini` |
| `PORT` | 服务端口 | `3000` |
