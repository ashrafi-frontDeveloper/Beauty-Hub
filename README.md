# 💇‍♀️ Beauty Salon Management System

A modern, responsive **Beauty Salon Management Dashboard** built with React and Tailwind CSS.

This project is designed as a real-world frontend application for managing appointments, services, customers, working hours, and salon reports.

> 🚧 **Project Status:** Frontend in development
> Backend integration will be added in a future phase.

---

## 📌 Overview

**Beauty Salon Management System** is a web-based dashboard designed for a single women's beauty salon.

The system provides two main user roles:

* 👩‍💼 **Admin / Salon Owner**
* 👩 **Customer**

Customers can browse available services and book appointments, while the salon owner can manage appointments, services, customers, working hours, and business reports.

The main goal of this project is to build a **clean, responsive, scalable, and portfolio-ready frontend application** using modern React development practices.

---

## ✨ Features

### 👩 Customer

* User registration
* User login
* Customer dashboard
* Browse salon services
* View service details
* Book an appointment
* Select appointment date
* Select available time
* View booking summary
* In-person payment
* View upcoming appointments
* View completed appointments
* View cancelled appointments
* Reschedule appointments
* Cancel appointments
* Profile management
* Settings
* Favorites
* Notifications

---

### 👩‍💼 Admin / Salon Owner

* Admin dashboard
* Appointment management
* Appointment status management
* Calendar view
* Customer management
* Service management
* Create services
* Edit services
* Delete services
* Activate / deactivate services
* Configure service price
* Configure service duration
* Manage salon working hours
* Revenue overview
* Appointment statistics
* Customer statistics
* Service statistics
* Reports
* Profile management
* Settings

---

## 📅 Appointment System

Appointment booking is the core functionality of the application.

### Customer Booking Flow

```text
Dashboard
    ↓
Services
    ↓
Select Service
    ↓
Select Date
    ↓
Select Available Time
    ↓
Booking Summary
    ↓
Confirm Appointment
    ↓
Booking Success
```

The system takes the following into account:

* Service duration
* Salon working hours
* Existing appointments
* Available time slots
* Appointment conflicts

Customers can also reschedule or cancel their appointments.

---

## 💳 Payment

Online payment is not included in the current version.

All appointments use:

```text
Payment Method: Pay at Salon
```

Online payment is planned as a future feature.

---

## 🧑‍💻 Tech Stack

### Frontend

* React
* Tailwind CSS
* React Router
* React Hook Form
* Zod
* Lucide React
* Recharts

### Planned / Optional

* TanStack Query
* Axios

These tools will be introduced only where they provide a clear benefit.

---

## 🏗️ Project Architecture

The project follows a modular React architecture.

```text
src/
│
├── assets/
│
├── components/
│   ├── common/
│   ├── ui/
│   └── layout/
│
├── data/
│   └── mock/
│
├── hooks/
│
├── layouts/
│   ├── AdminLayout/
│   └── CustomerLayout/
│
├── pages/
│   ├── auth/
│   ├── admin/
│   └── customer/
│
├── schemas/
│
├── services/
│
├── routes/
│
└── utils/
```

The architecture is designed to keep UI components, business logic, mock data, and future API integration reasonably separated.

---

## 🎨 Design & UX

The application follows a:

* Modern
* Clean
* Minimal
* Professional

design direction.

### Design Principles

* RTL interface
* Persian language
* Toman currency
* Responsive layout
* Mobile-first customer experience
* Desktop-first admin experience
* Clear visual hierarchy
* Reusable UI components
* Consistent spacing and typography
* Accessible interactions
* Loading, empty, error, and success states

---

## 📱 Responsive Design

The application is designed for:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

### Customer

Customer experience follows a **Mobile-First** approach because customers are expected to use the booking system primarily on mobile devices.

### Admin

The Admin dashboard follows a **Desktop-First** approach because salon management is expected to be performed mainly on desktop or laptop devices.

---

## 👥 User Roles

### Customer

```text
Register
   ↓
Login
   ↓
Customer Dashboard
   ↓
Book Appointment
   ↓
Manage Appointments
```

### Admin

```text
Login
   ↓
Admin Dashboard
   ↓
Manage Appointments
   ├── Calendar
   ├── Customers
   ├── Services
   ├── Working Hours
   └── Reports
```

---

## 📊 Admin Dashboard

The Admin dashboard provides an overview of the salon's current activity.

It includes:

* Today's appointments
* Total appointments
* Total customers
* Total services
* Revenue overview
* Appointment statistics
* Revenue charts
* Recent bookings
* Calendar overview

---

## 🗂️ Appointment Status

Appointments can have one of the following statuses:

| Status      | Description              |
| ----------- | ------------------------ |
| `Pending`   | Waiting for confirmation |
| `Confirmed` | Appointment confirmed    |
| `Completed` | Service completed        |
| `Cancelled` | Appointment cancelled    |

---

## 🛠️ Service Management

The Admin can manage the salon's services.

Each service contains:

```text
Service
├── ID
├── Name
├── Description
├── Price
├── Duration
├── Image
└── Status
```

Example:

```text
Hair Color
500,000 تومان
120 minutes
```

---

## 🕐 Working Hours

The Admin can configure the salon's working hours for each day.

Example:

```text
Saturday    09:00 - 20:00
Sunday      09:00 - 20:00
Monday      09:00 - 20:00
Tuesday     09:00 - 20:00
Wednesday   09:00 - 20:00
Thursday    09:00 - 20:00
Friday      Closed
```

Working hours are used when calculating available appointment time slots.

---

## 🚧 Current Limitations

The current version is primarily a frontend project.

The following features are not currently implemented:

* Real backend API
* Real database
* Real authentication
* Online payment
* SMS notifications
* Email notifications
* Staff management
* Multi-branch management
* Inventory management
* Payroll
* Reviews and ratings
* Loyalty system

Mock data is used where necessary during frontend development.

---

## 🔮 Future Development — V2

Potential features for future versions:

* 🔐 Real authentication and authorization
* 🗄️ Database integration
* 🔌 REST API
* 💳 Online payment
* 📱 SMS notifications
* 📧 Email notifications
* 👩‍🦰 Staff / stylist management
* 🏢 Multi-branch support
* ⭐ Customer reviews
* 🎁 Loyalty program
* 📦 Inventory management
* 💰 Advanced financial reports
* 📈 Advanced analytics

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/beauty-salon-dashboard.git
```

### 2. Navigate to the project

```bash
cd beauty-salon-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 🧪 Development Approach

This project is being developed incrementally.

Development process:

```text
Product Requirements
        ↓
UX / User Flow
        ↓
UI Design
        ↓
Component Architecture
        ↓
React Implementation
        ↓
Responsive Implementation
        ↓
Testing
        ↓
Backend Integration
```

The frontend is being developed independently from the backend so that a real API can be integrated later without rebuilding the entire UI.

---

## 🎯 Project Goals

The main goals of this project are:

* Practice building a real-world React application
* Improve React architecture skills
* Practice Tailwind CSS
* Build reusable components
* Practice responsive UI development
* Implement complex booking flows
* Practice dashboard development
* Learn better UX thinking
* Prepare a professional portfolio project
* Create a frontend architecture ready for future backend integration

---

## 📌 Roadmap

### Phase 1 — Product & UX

* [x] Define product scope
* [x] Define user roles
* [x] Define MVP
* [x] Define main user flows
* [x] Define booking flow
* [x] Define admin structure
* [ ] Finalize UI design

### Phase 2 — Frontend

* [ ] Project setup
* [ ] Design system
* [ ] Authentication pages
* [ ] Customer layout
* [ ] Admin layout
* [ ] Customer dashboard
* [ ] Admin dashboard
* [ ] Services
* [ ] Booking flow
* [ ] Appointment management
* [ ] Calendar
* [ ] Customers
* [ ] Working hours
* [ ] Reports
* [ ] Responsive implementation
* [ ] Loading / Empty / Error states

### Phase 3 — Backend

* [ ] Backend architecture
* [ ] Database
* [ ] Authentication API
* [ ] User roles
* [ ] Services API
* [ ] Appointment API
* [ ] Working hours API
* [ ] Customer API
* [ ] Reports API
* [ ] Frontend API integration

### Phase 4 — Production

* [ ] Testing
* [ ] Bug fixing
* [ ] Performance optimization
* [ ] Accessibility improvements
* [ ] Deployment
* [ ] Documentation

---

## 📄 License

This project is currently developed as a personal portfolio project.

License information will be added if the project is released publicly for reuse.

---

## 👨‍💻 Author

**Mohammad Ashrafi**

Frontend Developer

Built with ❤️ using React and Tailwind CSS.
