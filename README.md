# SEO / GEO / AEO Audit — Skill for Claude

[![npm](https://img.shields.io/npm/v/claude-seo-geo-aeo)](https://www.npmjs.com/package/claude-seo-geo-aeo)

Automatically audits any website across three dimensions of modern search visibility:

- **SEO** — Traditional search engine optimization (Google, Bing): title tags, meta descriptions, heading structure, schema markup, internal links, content quality
- **GEO** — Generative Engine Optimization for AI-powered search (Perplexity, ChatGPT Search, Google AI Overviews, Gemini): E-E-A-T signals, entity clarity, factual density, author authority
- **AEO** — Answer Engine Optimization for featured snippets and voice search: FAQ schema, HowTo schema, question-phrased headings, direct answer formatting

---

## How to use

Once installed, just give Claude a URL and ask about search performance:

> "Can you audit burningstickcreative.com for SEO?"
> "Check my site example.com — why isn't it ranking?"
> "Audit this URL for AI search readiness: example.com"
> "Run a full SEO, GEO, and AEO audit on my website"

Claude will ask whether you want a **Quick Audit** (top issues and scores) or a **Full Audit** (comprehensive breakdown), then crawl the site across multiple pages before delivering a structured report with a downloadable Word doc and PDF.

---

## Installation

### Claude Code (one command)

```bash
npx claude-seo-geo-aeo
```

Done. Use `/seo-geo-aeo` in Claude Code to run an audit.

### Claude Desktop / Cowork (manual)

1. Download the ZIP from this repository (click **Code → Download ZIP** on GitHub)
2. Open the Claude desktop app or website
3. Navigate to Customize
4. Go to **Skills** and click the **+** icon
5. Upload the ZIP

No unzipping required.

---

## Repository structure

```
SEO-GEO-AEO-Skill/
├── .github/workflows/
│   └── release.yml      ← auto changelog + git tag on merge
├── bin/
│   └── install.js       ← npx installer
├── SKILL.md             ← Audit instructions (source of truth)
├── package.json
└── README.md
```

---

## Version history

Releases and changelogs are auto-generated from commit history. See [GitHub Releases](../../releases) for full notes.

**1.1.0** — npx installer
- `npx claude-seo-geo-aeo` one-command install for Claude Code

**1.0.0** — Initial release
- Quick and Full audit modes
- Multi-page site crawl (up to 15 pages for Quick, unlimited for Full)
- SEO, GEO, and AEO scoring with priority recommendations matrix
- Downloadable audit report as both Word (.docx) and PDF
