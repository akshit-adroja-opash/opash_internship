# Authentication System Implementation - TODO

## Phase 1: Backend Implementation
- [x] Install dependencies (bcryptjs, jsonwebtoken, cors)
- [ ] Create User model with JSON file storage
- [ ] Create JWT utility functions
- [ ] Create auth middleware (verifyToken, requireAdmin)
- [ ] Update login routes with registration and JWT login
- [ ] Update server.ts with CORS and static files

## Phase 2: Protect Routes
- [ ] Add authentication middleware to upload routes
- [ ] Add authentication middleware to delete routes

## Phase 3: Frontend Implementation
- [ ] Update App.tsx with login/registration forms
- [ ] Add JWT token storage and management

## Phase 4: Testing
- [ ] Test registration
- [ ] Test login
- [ ] Test protected routes
- [ ] Test admin access
