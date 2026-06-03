# VnExpress Văn Lang — Content Notes

Fourth panel of the satire timeline (mythic past ↔ 1985 ↔ 2026 ↦ 2045). Modern VnExpress web chrome deadpan-reporting Hùng Vương–era mythology as news. "Now" = năm Hùng Vương thứ 18, mùa lũ (Sơn Tinh–Thủy Tinh era). Played 100% straight, never winking.

- Every article has internal `publishedAt` (ISO year 0018, sorting only) + UI-facing `displayDate` string.
- `imageStyle: illustration` for all; `imagePrompt` is a concrete Đông Hồ-friendly scene, no text, no style suffix.
- Vietnamese only; original prose, canonical figures treated respectfully.
- Frozen bureaucratic dialect (đẩy mạnh / tăng cường / chú trọng / phấn đấu / đồng bộ / quyết tâm cao) in royal chiếu and quan lại quotes — the 4,900-year-old dialect gag.

## Tier mix (LOCKED, verified by word count)

Bands recalibrated for Vietnamese whitespace tokens (syllables), counted with `wc -w` on the body below the YAML close. Depth-expansion pass landed every file in band; corpus grew 9,716 → 19,035 tokens.

- **LONG (1,500–2,200w): 6** — 01 (2106), 03 (1651), 04 (1886), 05 (1824), 07 (1809), 11 (1808). Added subheads: 01 "Nhìn lại ba mùa lũ" + phương án ứng phó; 04 childhood/brotherhood arc; 05 "tấm gương sống trong từng mái nhà"; 07 "bài học khởi nghiệp: bốn bước"; 11 fact-trail "Dòng thời gian vụ việc"; 03 "khi cả làng cùng chạy đua".
- **MEDIUM (600–900w): 9** — 02 (647), 06 (664), 09 (726), 10 (664), 12 (697), 14 (686), 16 (754), 17 (671), 20 (692). Each +1 source quote +1 context/background graf.
- **SHORT (250–400w): 6** — 08 (279), 13 (282), 15 (311), 18 (307), 19 (292), 21 (279). Each +1 concrete detail +1 vox-pop line; kept brief-flavored.

readMinutes: LONG 8–10 · MEDIUM 4 · SHORT 2.

## Roster

| # | File | Section | Tier | Featured | Priority | Comments | Notes |
|---|------|---------|------|----------|----------|----------|-------|
| 1 | thuy-tinh-dang-nuoc-nam-thu-ba-lien-tiep | thoi-su | L | ✅ | 10 | 2741 | LEAD: live flood; Sơn Tinh nâng núi; "năm nào cũng thế, quen rồi" vox-pop; flood beam |
| 2 | trieu-dinh-hop-phuong-an-de-doi-dan-len-cao | thoi-su | M | | 4 | 612 | Chiếu vua: đắp đê + dời dân lên cao; frozen dialect |
| 3 | goc-nhin-ken-re-bang-le-vat | goc-nhin | L | ✅ | 9 | 1986 | Op-ed on sính-lễ arms race; marriage-pressure beam; ties Thủy Tinh resentment |
| 4 | tam-su-trau-cau-voi | tam-su | L | | 6 | 2503 | EMOTIONAL CENTERPIECE: trầu-cau-vôi triangle, first-person stone confessional |
| 5 | ho-so-lang-lieu-con-thu-ngheo-vuot-kho | giao-duc | L | ✅ | 9 | 1742 | Lang Liêu tấm-gương vượt khó; bánh chưng/giầy; trời đất meaning |
| 6 | cau-be-phu-dong-tang-truong-dot-bien | suc-khoe | M | | 5 | 1455 | Thánh Gióng health-feature; làng góp gạo solidarity |
| 7 | mai-an-tiem-tu-dao-hoang-den-de-che-dua-hau | kinh-doanh | L | | 7 | 1318 | Startup profile: bị đày → thử giống → thả dưa theo sóng (marketing) → đế chế |
| 8 | gia-trau-cau-tang-manh-mua-cuoi | kinh-doanh | S | | 4 | 426 | Chợ phiên price brief, mùa cưới |
| 9 | dat-nen-chan-nui-tan-vien-tang-gia | bat-dong-san | M | | 5 | 1103 | Real-estate instinct: high-ground land sốt after lũ |
| 10 | the-gioi-phuong-bac-thong-nhat-thien-ha | the-gioi | M | | 4 | 887 | Foreign desk: nhà Tần–energy power unifying thiên hạ, deadpan |
| 11 | duong-day-ga-chin-cua-gia-khoa-thi-ken-re | phap-luat | L | | 7 | 1980 | Counterfeit lễ vật (gà chín cựa giả) investigation; replaced nỏ thần hồ sơ — Âu Lạc era is AFTER Văn Lang, chronology breach |
| 12 | hoi-vat-dau-mua-dua-thuyen | the-thao | M | | 5 | 1672 | Wrestling + boat-race; làng rivalry; bóng-đá-passion energy |
| 13 | ket-qua-vong-loai-dua-thuyen | the-thao | S | | 4 | 538 | Boat-race qualifier results brief |
| 14 | doi-song-tuc-an-trau-nhuom-rang | doi-song | M | | 4 | 1340 | Răng-đen trend/"trào lưu" lifestyle piece |
| 15 | meo-bao-quan-banh-chung-qua-mua-lu | doi-song | S | | 4 | 392 | Service journalism: storing bánh chưng through floods |
| 16 | du-lich-48-gio-o-kinh-do-phong-chau | du-lich | M | | 5 | 734 | "48 giờ ở Phong Châu" travel guide |
| 17 | giai-tri-le-hoi-mung-lua-moi-trong-dong | giai-tri | M | | 5 | 1218 | Trống-đồng performance review, "đêm diễn bùng nổ" |
| 18 | khoa-thi-ken-re-mo-dang-ky | giao-duc | S | | 4 | 967 | Admissions-news deadpan: voi chín ngà gà chín cựa ngựa chín hồng mao |
| 19 | thu-gian-10-dau-hieu-thuy-tinh-sap-dang-nuoc | thu-gian | S | | 4 | 1576 | Listicle parody, "dấu hiệu số 7 ai cũng gặp" |
| 20 | chu-dong-tu-tien-dung-chuyen-tinh-vuot-giai-cap | doi-song | M | | 5 | 1894 | Relationship feature: class-gap romance, chiếc khố handled delicately |
| 21 | gia-dua-hau-tang-vot-sau-lu | kinh-doanh | S | | 3 | 311 | Chợ phiên price flash on dưa hấu; post-lũ scarcity; own Đông Hồ hero |

## Cross-era beams threaded
- **Flood (Thủy Tinh = eternal lũ):** 1, 2, 9, 15, 19, 21
- **Marriage pressure / kén rể arms race:** 3, 8, 18, 20
- **Tấm gương vượt khó:** 5 (Lang Liêu), 6 (Gióng), 7 (Mai An Tiêm)
- **Real-estate / land instinct:** 9
- **Bóng-đá-equivalent passion (vật, đua thuyền):** 12, 13
- **The eternal queue / lễ vật lines:** 8, 18
