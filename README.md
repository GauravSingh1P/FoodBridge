# FoodBridge – Food Donation & Reselling Platform

---

## Project Overview

FoodBridge is a role-based web application designed to reduce food wastage by connecting:

- **Food Givers** → Event organizers, caterers, wedding hosts
- **Food Receivers** → NGOs, orphanages, old-age homes

The platform enables:

- **Food donation** (free)
- **Food reselling** (low-cost)

FoodBridge aims to create a practical bridge between surplus food providers and organizations or communities that need support, while also enabling structured low-cost food access.

---

## Current Product Status

The **frontend MVP is completed** and includes:

- Landing page
- Role-based navigation
- Giver dashboard
- Receiver dashboard
- Food listing creation UI
- Listing display UI
- Request / Buy interaction UI

The project now moves into **Backend & Database Development** using:

- **Frontend:** React + React Router
- **Backend:** Flask
- **Database:** MySQL

---

## Core Product Scope

### 1. Landing Experience
- Platform introduction
- Role-based access
- Auth entry points

### 2. Giver Module
- Add food listings
- Mark listing as Donate / Sell
- Manage own listings
- Track listing status

### 3. Receiver Module
- Browse available food listings
- Request donated food
- Buy low-cost food
- Track actions and responses

### 4. Backend System
- Flask REST API
- MySQL relational schema
- Authentication and authorization
- Listing lifecycle handling
- Request / order workflows

---

## Tech Stack

### Frontend
- React
- React Router
- useState

### Backend
- Flask
- Flask Blueprints
- Flask REST APIs
- SQLAlchemy or MySQL connector layer
- JWT / Session-based auth (to be decided in implementation phase)

### Database
- MySQL

---


---

## Code Legend

| Code | Meaning |
|------|---------|
| FB   | FoodBridge Project |
| INIT | Initialization |
| LP   | Landing Page |
| RT   | Routing |
| UI   | UI / Styling |
| AU   | Authentication |
| DB   | Database |
| BE   | Backend |
| API  | API Development |
| GV   | Giver Module |
| RC   | Receiver Module |
| LS   | Listings |
| RQ   | Request Workflow |
| OR   | Order / Purchase Workflow |
| MD   | Middleware |
| SEC  | Security |
| VAL  | Validation |
| INT  | Frontend-Backend Integration |
| TST  | Testing |
| LOG  | Logging / Monitoring |
| ADM  | Admin / Management |
| RF   | Refactor |
| DEP  | Deployment |
| REL  | Release |

---

# Product Development Roadmap

---

## Phase 0 – Frontend MVP Completion (Completed)

**FB-REL01-v1.0:** Frontend MVP completed  
**Reason:** Core role-based frontend is stable and ready for backend integration

---

## Phase 1 – Backend Initialization

**FB-INIT03-v1.1:** Flask backend project initialized  
**Reason:** Establish backend application foundation

**FB-INIT04-v1.1:** Backend folder structure created  
**Reason:** Maintain modular Flask architecture

**FB-BE01-v1.1:** Flask app factory created  
**Reason:** Support scalable backend configuration

**FB-BE02-v1.1:** Environment configuration system added  
**Reason:** Separate development settings from secrets

**FB-BE03-v1.1:** Backend requirements file created  
**Reason:** Standardize backend dependencies

---

## Phase 2 – Database Foundation

**FB-DB01-v1.2:** MySQL database connection configured  
**Reason:** Establish persistent data layer

**FB-DB02-v1.2:** Base schema design finalized  
**Reason:** Define relational structure for platform entities

**FB-DB03-v1.2:** Users table created  
**Reason:** Store giver and receiver account information

**FB-DB04-v1.2:** Roles table / role model created  
**Reason:** Support role-based user behavior cleanly

**FB-DB05-v1.2:** Food listings table created  
**Reason:** Persist giver-created food entries

**FB-DB06-v1.2:** Listing status model created  
**Reason:** Track available, requested, sold, closed states

**FB-DB07-v1.2:** Requests table created  
**Reason:** Support receiver-side request workflow

**FB-DB08-v1.2:** Orders / purchases table created  
**Reason:** Support receiver-side buy workflow

**FB-DB09-v1.2:** Timestamp and audit fields added  
**Reason:** Track creation and updates across core entities

**FB-DB10-v1.2:** Seed script for development data added  
**Reason:** Enable quick testing with meaningful sample data

---

## Phase 3 – Authentication System

**FB-AU01-v1.3:** Authentication module initialized  
**Reason:** Create structured auth layer in backend

**FB-AU02-v1.3:** User registration endpoint created  
**Reason:** Allow new giver and receiver accounts

**FB-AU03-v1.3:** User login endpoint created  
**Reason:** Enable authenticated access

**FB-AU04-v1.3:** Password hashing implemented  
**Reason:** Secure user credentials properly

**FB-AU05-v1.3:** Role-aware signup flow added  
**Reason:** Differentiate giver and receiver creation logic

**FB-AU06-v1.3:** Auth response schema standardized  
**Reason:** Keep frontend integration predictable

**FB-AU07-v1.3:** Session / token auth layer added  
**Reason:** Maintain authenticated user state

**FB-AU08-v1.3:** Current user profile endpoint added  
**Reason:** Allow frontend to fetch logged-in user info

---

## Phase 4 – Validation & Middleware

**FB-VAL01-v1.4:** Request validation utilities added  
**Reason:** Prevent malformed payloads

**FB-VAL02-v1.4:** Signup and login validation rules implemented  
**Reason:** Enforce required auth fields

**FB-VAL03-v1.4:** Listing payload validation added  
**Reason:** Ensure food entries are complete and usable

**FB-MD01-v1.4:** Auth middleware created  
**Reason:** Protect restricted routes

**FB-MD02-v1.4:** Role-check middleware added  
**Reason:** Restrict giver and receiver access logically

**FB-MD03-v1.4:** Global error handler added  
**Reason:** Return consistent backend error responses

---

## Phase 5 – Giver Backend Module

**FB-GV04-v1.5:** Giver listing creation API added  
**Reason:** Persist food listings from dashboard form

**FB-GV05-v1.5:** Donate / Sell backend logic implemented  
**Reason:** Support core listing type behavior

**FB-GV06-v1.5:** Giver listings fetch endpoint created  
**Reason:** Allow givers to view their own listings

**FB-GV07-v1.5:** Giver listing update endpoint created  
**Reason:** Allow editing of active listings

**FB-GV08-v1.5:** Giver listing deletion / close endpoint added  
**Reason:** Let givers retire stale or completed listings

**FB-GV09-v1.5:** Listing ownership checks enforced  
**Reason:** Prevent cross-user modification

---

## Phase 6 – Receiver Backend Module

**FB-RC04-v1.6:** Available listings fetch endpoint created  
**Reason:** Allow receivers to browse active food listings

**FB-RC05-v1.6:** Receiver listing detail endpoint added  
**Reason:** Show complete listing information

**FB-RC06-v1.6:** Donation request API created  
**Reason:** Enable receivers to request donated food

**FB-RC07-v1.6:** Purchase request API created  
**Reason:** Enable low-cost food buying flow

**FB-RC08-v1.6:** Receiver history endpoint added  
**Reason:** Track past requests and purchases

**FB-RC09-v1.6:** Listing visibility rules implemented  
**Reason:** Show only active and relevant listings

---

## Phase 7 – Listing Lifecycle Logic

**FB-LS01-v1.7:** Listing state transition rules added  
**Reason:** Control valid movement between listing states

**FB-LS02-v1.7:** Available → Requested transition implemented  
**Reason:** Support donation flow lifecycle

**FB-LS03-v1.7:** Available → Sold transition implemented  
**Reason:** Support buy flow lifecycle

**FB-LS04-v1.7:** Expired / closed listing logic added  
**Reason:** Prevent stale listings from remaining active

**FB-LS05-v1.7:** Duplicate action prevention added  
**Reason:** Avoid multiple invalid requests on same listing

---

## Phase 8 – Frontend-Backend Integration

**FB-INT01-v1.8:** Frontend API service layer created  
**Reason:** Standardize backend communication in React

**FB-INT02-v1.8:** Signup frontend connected to Flask auth  
**Reason:** Enable real backend registration

**FB-INT03-v1.8:** Login frontend connected to Flask auth  
**Reason:** Enable authenticated user access

**FB-INT04-v1.8:** Giver listing form connected to API  
**Reason:** Persist actual listing data

**FB-INT05-v1.8:** Receiver dashboard connected to listings API  
**Reason:** Replace mock data with real backend data

**FB-INT06-v1.8:** Request / Buy actions connected to backend  
**Reason:** Enable real platform interaction

**FB-INT07-v1.8:** Auth-based route protection added in frontend  
**Reason:** Prevent unauthorized dashboard access

---

## Phase 9 – Security & Hardening

**FB-SEC01-v1.9:** Sensitive config moved to environment variables  
**Reason:** Protect secrets and DB credentials

**FB-SEC02-v1.9:** Password policy rules added  
**Reason:** Improve credential safety

**FB-SEC03-v1.9:** Auth route abuse protection added  
**Reason:** Reduce brute-force risk

**FB-SEC04-v1.9:** Input sanitization layer implemented  
**Reason:** Prevent unsafe payload handling

**FB-SEC05-v1.9:** Protected resource access checks reviewed  
**Reason:** Strengthen authorization boundaries

---

## Phase 10 – Testing

**FB-TST01-v2.0:** Backend unit test setup created  
**Reason:** Establish testable backend workflow

**FB-TST02-v2.0:** Auth endpoint tests added  
**Reason:** Verify signup and login behavior

**FB-TST03-v2.0:** Listing API tests added  
**Reason:** Validate create / read / update flows

**FB-TST04-v2.0:** Request and buy workflow tests added  
**Reason:** Confirm receiver-side actions

**FB-TST05-v2.0:** Integration test dataset created  
**Reason:** Run reliable end-to-end backend checks

---

## Phase 11 – Logging, Monitoring, and Refactor

**FB-LOG01-v2.1:** Structured backend logging added  
**Reason:** Improve debugging and visibility

**FB-LOG02-v2.1:** API request logging enabled  
**Reason:** Track backend activity for development

**FB-RF01-v2.1:** Service layer extracted from route logic  
**Reason:** Improve backend maintainability

**FB-RF02-v2.1:** Database query layer refactored  
**Reason:** Reduce duplication and improve clarity

**FB-RF03-v2.1:** Response helpers standardized  
**Reason:** Keep API output consistent

---

## Phase 12 – Admin & Operational Features

**FB-ADM01-v2.2:** Admin listing moderation endpoint added  
**Reason:** Support future oversight and quality control

**FB-ADM02-v2.2:** Admin user overview endpoint added  
**Reason:** Enable basic platform management

**FB-ADM03-v2.2:** Basic metrics endpoint added  
**Reason:** View counts of users, listings, requests, and orders

---

## Phase 13 – Deployment Preparation

**FB-DEP01-v2.3:** Production Flask config created  
**Reason:** Separate production behavior from development

**FB-DEP02-v2.3:** MySQL production connection settings added  
**Reason:** Prepare backend for deployed database usage

**FB-DEP03-v2.3:** CORS and frontend-backend domain config finalized  
**Reason:** Support deployed full-stack integration

**FB-DEP04-v2.3:** Deployment documentation added  
**Reason:** Make setup and hosting reproducible

---

## Phase 14 – Backend Release

**FB-REL02-v3.0:** Backend-integrated MVP released  
**Reason:** Deliver full-stack FoodBridge MVP with Flask and MySQL

---

## Version Milestones

| Version | Description |
|--------|-------------|
| v1.0 | Frontend MVP completed |
| v1.1 | Flask backend initialized |
| v1.2 | Database foundation completed |
| v1.3 | Authentication system active |
| v1.4 | Validation and middleware active |
| v1.5 | Giver backend functional |
| v1.6 | Receiver backend functional |
| v1.7 | Listing lifecycle logic complete |
| v1.8 | Frontend integrated with backend |
| v1.9 | Security improvements applied |
| v2.0 | Testing foundation completed |
| v2.1 | Logging and refactor improvements |
| v2.2 | Admin and metrics features added |
| v2.3 | Deployment preparation completed |
| v3.0 | Full-stack MVP released |

---

## Suggested Backend Folder Direction

```bash
backend/
│
├── app/
│   ├── routes/
│   ├── models/
│   ├── services/
│   ├── middleware/
│   ├── utils/
│   ├── config/
│   └── __init__.py
│
├── tests/
├── run.py
├── requirements.txt
└── .env