# Dhanmika Buildcon Pvt. Ltd. - Official Website

**"We Shape Your Dream Home"**

A modern, responsive website for Dhanmika Buildcon Pvt. Ltd., a leading construction and interior design company based in Patna, Bihar. The website showcases our comprehensive services including architectural planning, building construction, interior design, and more.

## 🏗️ About Dhanmika Buildcon

**Bringing Your Luxury World Class Residential Homes at the Most Affordable Price**

### Our Services
- 🏛️ **Architectural Plans & Designs**
- 🏗️ **Building Constructions**
- 🎨 **Interior Designs & Works**
- 📋 **Building Plan Approvals**
- 🔧 **Repair & Renovations**
- 💧 **Complete Waterproofing Work**

### Contact Information
- **Phone:** +91 9386023587
- **Website:** https://dhanmikabuildcon.com
- **Address:** Priyadarshi Nagar, DPS More, Bailey Road, Patna - 801503, Bihar, India

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Database:** Firebase Firestore
- **Storage:** Firebase Storage
- **State Management:** Redux Toolkit
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Deployment:** Vercel

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── get-quote/         # Quote request page
│   ├── portfolio/         # Portfolio showcase
│   ├── project/[slug]/    # Individual project pages
│   ├── services/          # Services pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── forms/            # Form components
│   ├── sections/         # Page sections
│   └── ui/               # shadcn/ui components
├── lib/                  # Utilities and configurations
│   ├── firebase.ts       # Firebase configuration
│   ├── store.ts          # Redux store
│   └── slices/           # Redux slices
└── types/                # TypeScript type definitions
\`\`\`

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project
- Vercel account (for deployment)

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/your-username/dhanmika-buildcon-website.git
cd dhanmika-buildcon-website
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Environment Variables
Create a `.env.local` file in the root directory:

\`\`\`env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Google Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://dhanmikabuildcon.com
\`\`\`

### 4. Firebase Setup

#### 4.1 Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project named "dhanmika-buildcon"
3. Enable Firestore Database
4. Enable Storage
5. Set up Authentication (optional)

#### 4.2 Firestore Collections Structure

Create the following collections in Firestore:

**projects** collection:
\`\`\`json
{
  "id": "auto-generated",
  "title": "Modern Villa Construction",
  "slug": "modern-villa-construction",
  "description": "Luxury 3BHK villa with modern amenities",
  "category": "Residential Construction",
  "subcategory": "Villa",
  "location": "Patna, Bihar",
  "year": 2024,
  "images": ["url1", "url2", "url3"],
  "featured": true,
  "duration": "8 months",
  "budget": "₹45 Lakh",
  "createdAt": "timestamp"
}
\`\`\`

**services** collection:
\`\`\`json
{
  "id": "auto-generated",
  "title": "Building Construction",
  "slug": "building-construction",
  "description": "Complete building construction services",
  "icon": "building",
  "duration": "6-12 months",
  "image": "service-image-url",
  "priceRange": "₹15 Lakh - ₹1 Crore",
  "features": ["Site Planning", "Foundation Work", "Structure", "Finishing"]
}
\`\`\`

**testimonials** collection:
\`\`\`json
{
  "id": "auto-generated",
  "name": "Rajesh Kumar",
  "feedback": "Excellent work quality and timely delivery",
  "image": "client-image-url",
  "rating": 5,
  "linkedProject": "project-id",
  "createdAt": "timestamp"
}
\`\`\`

**contacts** collection:
\`\`\`json
{
  "id": "auto-generated",
  "name": "Client Name",
  "email": "client@email.com",
  "phone": "9876543210",
  "message": "Project inquiry",
  "status": "pending",
  "createdAt": "timestamp"
}
\`\`\`

**categories** collection:
\`\`\`json
{
  "id": "auto-generated",
  "name": "Residential Construction",
  "description": "Home and residential building projects",
  "color": "#ef4444"
}
\`\`\`

### 5. Run Development Server
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Visit `http://localhost:3000` to see the website.

## 🚀 Deployment to Vercel

### 1. Connect to Vercel
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
\`\`\`

### 2. Environment Variables in Vercel
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add all environment variables from `.env.local`

### 3. Custom Domain Setup
1. In Vercel dashboard, go to Settings → Domains
2. Add your domain: `dhanmikabuildcon.com`
3. Configure DNS settings in Namecheap:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.61`

### 4. SSL Certificate
Vercel automatically provides SSL certificates for custom domains.

## 📈 SEO Optimization

### 1. Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add property: `https://dhanmikabuildcon.com`
3. Verify ownership using HTML tag method
4. Submit sitemap: `https://dhanmikabuildcon.com/sitemap.xml`

### 2. Google My Business
1. Create/claim your Google My Business listing
2. Add complete business information
3. Upload photos of completed projects
4. Encourage customer reviews

### 3. Local SEO Keywords
- "construction company patna"
- "interior design patna bihar"
- "building contractor patna"
- "home construction patna"
- "architectural services patna"

### 4. Content Strategy
- Regular blog posts about construction tips
- Project case studies
- Before/after galleries
- Client testimonials

## 🔧 Firebase Admin Panel Integration

The website automatically fetches data from Firebase collections:
- **Projects:** Displayed in portfolio section
- **Services:** Shown on services page
- **Testimonials:** Featured in testimonials carousel
- **Contacts:** Form submissions stored here

## 📱 Features

### ✅ Completed Features
- [x] Responsive design for all devices
- [x] SEO optimized with meta tags
- [x] Firebase integration for dynamic content
- [x] Contact forms with validation
- [x] Quote request system
- [x] Portfolio with filtering
- [x] Service pages with detailed information
- [x] WhatsApp integration
- [x] Google Maps integration
- [x] Image optimization
- [x] Loading states and error handling

### 🚧 Future Enhancements
- [ ] Blog section for SEO
- [ ] Online payment integration
- [ ] Project tracking for clients
- [ ] Multi-language support (Hindi)
- [ ] Progressive Web App (PWA)
- [ ] Advanced analytics dashboard

## 🛠️ Maintenance

### Regular Updates
1. **Content Updates:** Add new projects and testimonials monthly
2. **SEO Monitoring:** Check Google Search Console weekly
3. **Performance:** Monitor Core Web Vitals
4. **Security:** Keep dependencies updated

### Backup Strategy
1. **Firebase:** Automatic backups enabled
2. **Code:** Version controlled with Git
3. **Images:** Stored in Firebase Storage with CDN

## 📞 Support

For technical support or website updates:
- **Developer:** [Your Contact Information]
- **Email:** [Your Email]
- **Phone:** [Your Phone]

## 📄 License

This project is proprietary software developed for Dhanmika Buildcon Pvt. Ltd.

---

**Dhanmika Buildcon Pvt. Ltd.**  
*We Shape Your Dream Home*  
📞 +91 9386023587  
🌐 https://dhanmikabuildcon.com  
📍 Priyadarshi Nagar, DPS More, Bailey Road, Patna - 801503
\`\`\`

Now let me update the WhatsApp button and other components with the correct company information:
