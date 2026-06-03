# VnExpress Văn Lang

A satirical, fictional edition of VnExpress written as if the modern news website existed in the **mythic Hùng Vương era** ("năm Hùng Vương thứ 18, mùa lũ"). Vietnam's founding folk tales, deadpan-reported as breaking news: Thủy Tinh's floods get live coverage, Lang Liêu is a poor-student-makes-good human-interest feature, Mai An Tiêm is a startup profile, Trầu cau runs as a tearful confessional column — and the counterfeit nine-spur-rooster ring gets an investigative exposé before the royal son-in-law exams.

**Live:** https://vnexpress-vanlang.nvbinh.com

## The four-era timeline

| Era | Site | Repo |
|---|---|---|
| **~Hùng Vương 18 (myth)** | **this site** | this repo |
| 1985 (bao cấp) | [vnexpress1985.nvbinh.com](https://vnexpress1985.nvbinh.com) | [vnexpress-1985](https://github.com/nvbinh15/vnexpress-1985) |
| 2026 | the real vnexpress.net | — |
| 2045 | [vnexpress45.nvbinh.com](https://vnexpress45.nvbinh.com) | [vnexpress-2045](https://github.com/nvbinh15/vnexpress-2045) |
| 2045 (Gen-Z spin-off) | [kenh14-2045.nvbinh.com](https://kenh14-2045.nvbinh.com) | [kenh14-2045](https://github.com/nvbinh15/kenh14-2045) |

Royal edicts here use the exact same frozen bureaucratic register ("đẩy mạnh", "tăng cường", "phấn đấu") as the 1985 and 2045 panels — the dialect gag spans 4,900 years.

## Era mechanics

- **Dates:** every article carries a mythic `displayDate` ("Ngày 12 tháng 7, năm Hùng Vương thứ 18") rendered everywhere; internal ISO year-0018 dates exist only for sorting. No Gregorian dates appear in the UI.
- **Images:** the site's "photojournalism" is **Đông Hồ folk woodblock** — all heroes generated in flat mineral pigments on dó-paper texture, the way B&W film served the 1985 panel.
- **Chronology guardrail:** nothing post-Văn Lang exists in-world (no An Dương Vương, Cổ Loa or nỏ thần — that's Âu Lạc, the *next* dynasty). Earlier-reign tales (Gióng, Lang Liêu) run as retrospective "hồ sơ" features, the way real newspapers run anniversary pieces.
- The content was fact-checked against canonical tellings (Lĩnh Nam chích quái / textbook versions) — see `VANLANG_AUDIT.md`.

## Stack

Vite + React 19 + TypeScript + Tailwind; MDX articles + JSON comments; `gpt-image-2` → AVIF image pipeline. Built via an agentic build → review → fix workflow (3 parallel critics, 2 rounds). Static SPA on Vercel.

```bash
npm install && npm run dev
```

## Disclaimer

**Đây là trang web hư cấu (satire).** All articles, comments and images are fictional and AI-generated for a non-commercial creative project celebrating Vietnamese folk mythology. Not affiliated with VnExpress or FPT.
