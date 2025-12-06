# Fejlesztői útmutató

## Bevezetés

Ez az útmutató segít az agentnek a játék fejlesztésében a WolfGame projektben. Az alábbi lépéseket követve tud hatékonyan dolgozni a projekten.

## Fejlesztési folyamat

### 1. Tervezés

- Olvasd el a `game-idea.md` fájlt és töltsd ki a megfelelő részeket
- Készíts egy egyszerű játéktervet a `docs/game-design.md` fájlban
- Határozd meg a szükséges technológiákat

### 2. Környezet beállítása

- Hozd létre a szükséges mappákat a `src` könyvtárban
- Készítsd el a projekt alapvető struktúráját
- Hozd létre a szükséges konfigurációs fájlokat

### 3. Implementáció

- Írd meg a játék alapvető logikáját
- Hozd létre a felhasználói felületet
- Implementáld a játékmechanikát

### 4. Tesztelés

- Teszteld a játék működését
- Javítsd a hibákat
- Optimalizáld a teljesítményt

### 5. Dokumentáció

- Frissítsd a dokumentációt
- Készíts leírást a játék használatáról
- Dokumentáld a fejlesztési folyamatot

## Javasolt gyakorlatok

### Verziókövetés

- Használj informatív commit üzeneteket
- Készíts brancheket a új funkciókhoz
- Használj pull requesteket a változtatásokhoz

### Kódminőség

- Írj tiszta, olvasható kódot
- Használj kommenteket a bonyolult részekhez
- Kövesd a kiválasztott technológia konvencióit

### Projektmenedzsment

- Dokumentáld a fontos döntéseket
- Használj issue-ket a feladatok követésére
- Tartsd naprakészen a projekt állapotát

## MCP eszközök használata

A GitHub MCP szerver a következő műveleteket teszi lehetővé:

- **Fájlkezelés**: `create_or_update_file`, `get_file_contents`, `delete_file`
- **Repository menedzsment**: `create_branch`, `list_commits`, `get_commit`
- **Issue és PR kezelés**: `create_pull_request`, `add_issue_comment`
- **Keresés**: `search_code`, `search_issues`, `search_repositories`

## Hibaelhárítás

### Gyakori problémák

1. **Hozzáférési problémák**: Ellenőrizd a GitHub token beállításait
2. **Merge konfliktusok**: Használj `merge_pull_request` a konfliktusok megoldásához
3. **Fájl konfliktusok**: Mindig szerezd be a legfrissebb SHA értéket frissítés előtt

### Segítségkérés

- Használd a GitHub issue-ket a problémák jelentésére
- Kérj segítséget a projekt dokumentációjában leírt módon

---

*Sok sikert a fejlesztéshez!*