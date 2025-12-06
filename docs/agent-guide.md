# Agent Útmutató - WolfGame Projekt

## Bevezetés

Üdvözöllek a WolfGame projektben! Ez az útmutató segít neked a játék fejlesztésében MCP (Model Context Protocol) segítségével.

## Feladatod

1. Válassz egy játék típust (böngésző alapú, terminál, stb.)
2. Tervezd meg a játékot a `docs/game-design.md` fájlban
3. Implementáld a játékot a `src` mappában
4. Teszteld a játékot
5. Dokumentáld a munkádat

## Elérhető MCP eszközök

### Fájlkezelés
- get_file_contents: Fájl tartalmának lekérése
- create_or_update_file: Fájl létrehozása vagy frissítése
- delete_file: Fájl törlése

### Repository menedzsment
- create_branch: Új branch létrehozása
- create_pull_request: Pull request létrehozása
- list_commits: Commitok listázása

### Együttműködés
- issue_write: Issue létrehozása vagy frissítése
- add_issue_comment: Hozzászólás hozzáadása

### Keresés
- search_code: Kódkeresés a repositoryban

## Fejlesztési folyamat

### 1. Tervezés
- Töltsd ki a `game-idea.md` fájlt
- Készíts játéktervet a `docs/game-design.md` fájlban

### 2. Implementáció
- Módosítsd a `src/scripts/game.js` fájlt
- Frissítsd a `src/index.html` fájlt
- Stílusozd a `src/styles/main.css` fájlban

### 3. Tesztelés
- Hozz létre teszteket a `tests` mappában
- Ellenőrizd a játék működését

### 4. Dokumentáció
- Frissítsd a README.md fájlt
- Dokumentáld a fejlesztési folyamatot

## Példa munkafolyamat

1. Feature branch létrehozása:
   ```
   create_branch: feature/game-mechanics
   ```

2. Fájlok módosítása:
   ```
   create_or_update_file: src/scripts/game.js
   ```

3. Pull request létrehozása:
   ```
   create_pull_request: feature/game-mechanics -> main
   ```

## Sikerkritériumok

1. Egy működő játék készült el
2. A játék megfelelően dokumentálva van
3. A kód tisztán és olvashatóan van írva
4. A projekt struktúrája következetes

Sok sikert a fejlesztéshez!