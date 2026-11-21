# Ayam Mbak Rina Landing Page (FigCraft) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A Desktop (1440) and Mobile (390) landing-page design in FigCraft.

**Architecture:** One FigCraft file `design/ayam-mbak-rina.fig`. Each frame is a vertical auto-layout stack of section frames. Color and text styles are defined first and reused everywhere.

**Tech Stack:** FigCraft MCP (`create_node`, `set_properties`, `run_command`, `batch`, `screenshot`, `inspect_document`).

**Spec:** `docs/superpowers/specs/2026-11-19-landing-page-figcraft-design.md`

## Global Constraints
- Colors: red `#C8102E`, yellow `#FFC72C`, cream `#FFF8EC`, text `#2A1A12`. Footer is red.
- Headings use Bricolage Grotesque (fallback Poppins Black). Body uses Inter.
- Menu names and prices are copied verbatim from the spec, including "75–80k" and "start from 30k".
- Branches: Pasar Gang Baru no. 78 (082229302678) and Pasar Prembaen no. 1046 (081225557578).
- Photos come only from `assets/`, with rounded corners of 16 or more.

## Review Focus
- Long menu names such as "ati ampela ayam / bebek bumbu kuning" must wrap inside the card at 390px, not overflow.
- Text on red and yellow must pass contrast: check with `check_contrast`.
- Portrait WhatsApp photos must be cropped (fill) and never stretched.
- Both WA buttons must name their branch, so the buyer knows which branch they are chatting.
- The mobile frame must have no element wider than 390px.

---

### Task 1: File, styles, assets
- [ ] Open a new file and save it as `design/ayam-mbak-rina.fig`.
- [ ] Create 4 color styles and text styles (H1 64/48, H2 40/32, body 16, price 20 bold).
- [ ] Import the needed photos: 7 (ayam box) for the hero, 13 (besek) for nasi box, 6/5/9/12 for the menu, 3/4/1 for the kitchen.
- Verify: `inspect_document` lists the styles and `images` is 9 or more.

### Task 2: Desktop frame (1440)
- [ ] Build the 8 sections in spec order as auto-layout children.
- Verify: `screenshot` of each section, plus contrast checks. Fix overflow.

### Task 3: Mobile frame (390)
- [ ] Build the same sections in a single column, with the menu grid in 2 columns and the location cards stacked.
- Verify: `screenshot`, and `inspect_document` shows width ≤ 390 for every child.

### Task 4: Save + export
- [ ] Save the file and export both frames to PNG in `design/export/`.
