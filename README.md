# FoodBridge – Food Donation & Reselling Platform

---

## Project Overview

FoodBridge is a role-based web application designed to reduce food wastage by connecting:

- **Food Givers** → Event organizers, caterers, wedding hosts  
- **Food Receivers** → NGOs, orphanages, old-age homes  

The platform enables:

- Food donation (free)  
- Food reselling (low-cost)  

---

## Core MVP Scope

This MVP focuses on 3 core pages only:

### 1. Landing Page
- Role selection (Giver / Receiver)

### 2. Giver Dashboard
- Add food listings  
- Choose: Donate / Sell  

### 3. Receiver Dashboard
- View available food  
- Choose: Request / Buy  

---

## Architecture (Frontend Only)

- React (Component-based architecture)  
- React Router (Navigation)  
- useState (State management)  
- Minimal CSS (inline / modular)  

---

## Version Control Strategy

Instead of generic commits, this project follows a **Feature-Code Versioning System**.

---

## Code Legend (How to Read Codes)

| Code | Meaning            |
|------|-------------------|
| FB   | FoodBridge Project |
| LP   | Landing Page       |
| AU   | Authentication     |
| GV   | Giver Module       |
| RC   | Receiver Module    |
| RT   | Routing            |
| UI   | UI/Styling         |
| DB   | Data Handling      |
| FX   | Fixes              |
| RF   | Refactor           |

---

## Development Roadmap & Version History

---

### Phase 0 – Project Initialization

**FB-INIT01-v0.0:** Project initialized with React setup  
*Reason:* Establish base environment using Vite/CRA  

**FB-INIT02-v0.0:** Folder structure created (pages/components)  
*Reason:* Maintain scalable and modular architecture  

---

### Phase 1 – Landing Page

**FB-LP01-v0.1:** Landing page structure created  
*Reason:* Entry point for role selection  

**FB-LP02-v0.1:** Role selection buttons added  
*Reason:* Allow navigation to giver/receiver flows  

**FB-UI01-v0.1:** Basic UI styling for landing page  
*Reason:* Improve usability and visual clarity  

---

### Phase 2 – Routing System

**FB-RT01-v0.2:** React Router integrated  
*Reason:* Enable navigation between pages  

**FB-RT02-v0.2:** Role-based navigation implemented  
*Reason:* Direct users to correct dashboards  

---

### Phase 3 – Giver Module

**FB-GV01-v0.3:** Giver dashboard created  
*Reason:* Interface for food providers  

**FB-GV02-v0.3:** Food listing form added  
*Reason:* Capture food details (name, quantity)  

**FB-GV03-v0.3:** Donate/Sell option implemented  
*Reason:* Core business logic for giver flexibility  

**FB-UI02-v0.3:** Giver UI improvements  
*Reason:* Better form usability  

---

### Phase 4 – Receiver Module

**FB-RC01-v0.4:** Receiver dashboard created  
*Reason:* Interface for food seekers  

**FB-RC02-v0.4:** Food listing display implemented  
*Reason:* Show available food items  

**FB-RC03-v0.4:** Request/Buy actions added  
*Reason:* Enable interaction with listings  

**FB-UI03-v0.4:** Receiver UI improvements  
*Reason:* Improve readability of listings  

---

### Phase 5 – Data Handling (Frontend State)

**FB-DB01-v0.5:** Local state management for food data  
*Reason:* Simulate backend functionality  

**FB-DB02-v0.5:** Data flow between giver and receiver  
*Reason:* Connect both modules logically  

---

### Phase 6 – Refinement

**FB-RF01-v0.6:** Component refactoring  
*Reason:* Improve reusability and code clarity  

**FB-FX01-v0.6:** Bug fixes in form and navigation  
*Reason:* Ensure smooth user experience  

---

### Phase 7 – MVP Release

**FB-REL01-v1.0:** MVP completed  
*Reason:* Core functionality stable and usable  

---

## Version Milestones

| Version | Description                |
|--------|---------------------------|
| v0.1   | Landing Page Ready         |
| v0.2   | Routing Complete           |
| v0.3   | Giver Module Functional    |
| v0.4   | Receiver Module Functional |
| v0.5   | Data Flow Connected        |
| v0.6   | Stable Build               |
| v1.0   | MVP Release                |

---

## Installation

```bash
git clone https://github.com/GauravSingh1P/FoodBridge.git
cd foodbridge
npm install
npm run dev
