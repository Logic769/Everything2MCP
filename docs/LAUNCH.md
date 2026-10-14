# Launch kit (drafts — do not auto-post)

**Repo:** https://github.com/shcdwz1234/Everything2MCP  
**License:** Apache-2.0  
**Release:** v0.1.0 · [docs/DEMO.md](DEMO.md)

These blurbs are ready for **manual** review. Do **not** spam-post. Prefer draft PRs / scheduled posts after a human pass.

---

## 1) PR: punkpeye/awesome-mcp-servers

**Target section:** typically under gateways / aggregators / multi-protocol (match the list's current headings).

**Suggested list entry (one line):**

```markdown
- [Everything2MCP](https://github.com/shcdwz1234/Everything2MCP) - Everything can become MCP: hot-reload local caps, private-net services, OpenAPI/gRPC/MQTT/queues & Feishu/DingTalk/WeCom into one MCP surface. Safe defaults. Apache-2.0.
```

**PR title:** `Add Everything2MCP — multi-protocol MCP gateway`

**PR body:**

```markdown
## Why

Everything2MCP turns local capabilities, private-network services, and southbound protocols (OpenAPI / gRPC / MQTT / queues / industrial buses) plus Feishu / DingTalk / WeCom Partner mounts into **one** hot-reloadable MCP server.

- Honest maturity labels (Implemented / Thin / leftover)
- Safe defaults (`allowWrite=false`, blacklist always on)
- Same-process console at `/ui/` + stdio / Streamable HTTP
- Apache-2.0

## Links

- Repo: https://github.com/shcdwz1234/Everything2MCP
- Demo: https://github.com/shcdwz1234/Everything2MCP/blob/main/docs/DEMO.md
- Release: https://github.com/shcdwz1234/Everything2MCP/releases/tag/v0.1.0

Happy to adjust section placement or wording to match the list style.
```

**Status:** fork may be missing — open from a fork after `gh repo fork punkpeye/awesome-mcp-servers`, or paste the entry manually.

---

## 2) Show HN

**Title:** `Show HN: Everything2MCP – turn local caps and OpenAPI/gRPC/MQTT into one MCP surface`

**Body:**

```text
Everything2MCP is an Apache-2.0 MCP gateway: discover local/private-net capabilities, hot-register OpenAPI/gRPC/MQTT/queues (and Feishu/DingTalk/WeCom via Partner/native adapters) onto one MCP server with Safe/Full gates and a same-process console.

Honesty: protocols are labeled Implemented / Thin / leftover — we do not claim every adapter is production-ready.

Demo (≈3 min): https://github.com/shcdwz1234/Everything2MCP/blob/main/docs/DEMO.md
Repo: https://github.com/shcdwz1234/Everything2MCP
Release: v0.1.0
```

---

## 3) r/LocalLLaMA

**Title:** `Everything2MCP (Apache-2.0): one MCP server for local caps + OpenAPI/gRPC/MQTT + Feishu/DingTalk/WeCom`

**Body:**

```text
Built this for agent/IDE setups where you do not want N protocol clients.

- Auto-discover local / private-net / platform caps → hot-load MCP tools
- Safe defaults (allowWrite=false); Full mode does not disable the blacklist
- Console at /ui/ + stdio or Streamable HTTP /mcp
- Partner protocol so apps mount without rewriting as MCP servers

3-minute demo + screenshots: https://github.com/shcdwz1234/Everything2MCP/blob/main/docs/DEMO.md
GitHub: https://github.com/shcdwz1234/Everything2MCP

Feedback on Thin adapters and missing protocols welcome (good first issues labeled on the repo).
```

---

## 4) V2EX

**节点建议:** `share` / `programmer` / `opensource`（按版规选一）

**标题:** `开源 Everything2MCP：本机能力 + OpenAPI/gRPC/MQTT/飞书钉钉企微 → 一个 MCP 表面（Apache-2.0）`

**正文:**

```text
做 Agent / Cursor 时不想为每个协议各接一套客户端，所以开源了 Everything2MCP：

- 自动发现本机 / 私网 / 平台能力，热注册到同一个 MCP server
- 默认 Safe、allowWrite=false；协议成熟度诚实标注 Implemented / Thin / leftover
- 同进程控制台 /ui/；stdio 或 Streamable HTTP
- Partner 清单挂载，飞书 / 钉钉 / 企微 native 路径
- Apache-2.0

三分钟演示：https://github.com/shcdwz1234/Everything2MCP/blob/main/docs/DEMO.md
仓库：https://github.com/shcdwz1234/Everything2MCP
Release：v0.1.0

欢迎拍砖；仓库里标了 good first issue。
```

---

## Checklist before posting

- [ ] v0.1.0 release live
- [ ] README GIF + EN one-liner above the fold
- [ ] CI green on `main`
- [ ] Human tone pass (no hype, keep honesty about Thin)
- [ ] awesome-mcp-servers: draft PR only after fork + section match


---

## Social preview / OG card

Asset: [`docs/images/og.png`](images/og.png) (1200×630).

**GitHub repo social preview:** Settings → General → Social preview → Upload `docs/images/og.png` (or let GitHub auto-pick the README image).

**Link previews elsewhere:** point Open Graph / Twitter card image URLs at the raw file, e.g.

```
https://raw.githubusercontent.com/shcdwz1234/Everything2MCP/main/docs/images/og.png
```

Do not spam-post; keep this for manual share cards and the README.
