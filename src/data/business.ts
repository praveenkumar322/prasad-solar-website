// ============================================
// PRASAD SOLAR SERVICES — BUSINESS DATA
// ============================================
// Source: Research conducted 30 September 2026
// All VERIFIED data sourced from Justdial & Google Search
// All MOCK data clearly marked — replace before production
// ============================================

// ---- VERIFIED BUSINESS DATA ----
export const BUSINESS = {
  name: 'Prasad Solar Services',
  tagline: 'Trusted Solar Solutions for Kakinada',
  address: {
    line1: 'D-No: 1-219/3, near Ramalayam Temple',
    line2: 'Siddhartha Nagar, Rayudupalem',
    city: 'Kakinada',
    state: 'Andhra Pradesh',
    pin: '533005',
    full: 'D-No: 1-219/3, near Ramalayam Temple, Siddhartha Nagar, Rayudupalem, Kakinada - 533005, AP',
  },
  established: 2010,
  rating: 5.0,
  reviewCount: 44,
  ratingSource: 'Justdial',
  operatingHours: '09:00 AM – 06:00 PM',
  operatingDays: 'Monday – Saturday',
} as const;

// ---- PLACEHOLDER (obtain from business) ----
export const BUSINESS_PHONE = '+91 XXXXX XXXXX';
export const BUSINESS_WHATSAPP = '+91XXXXXXXXXX';
export const BUSINESS_EMAIL = 'info@prasadsolar.com';
export const WHATSAPP_MESSAGE = 'Hi, I\'m interested in solar installation for my property in Kakinada. Can you help?';
export const GOOGLE_MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.8!2d82.23!3d16.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU2JzI0LjAiTiA4MsKwMTMnNDguMCJF!5e0!3m2!1sen!2sin!4v1';

// ---- VERIFIED SERVICES ----
export const SERVICES = [
  {
    id: 'residential',
    title: 'Residential Solar',
    description: 'Complete solar panel systems for homes. Reduce your electricity bill and earn from surplus power with net metering.',
    icon: 'Home',
    features: ['Rooftop solar panels', 'Net metering setup', 'PM Surya Ghar subsidy assistance', 'APEPDCL paperwork support'],
  },
  {
    id: 'commercial',
    title: 'Commercial Solar',
    description: 'Solar solutions for shops, offices, and commercial buildings. Lower operational costs and demonstrate environmental responsibility.',
    icon: 'Building2',
    features: ['High-capacity systems', 'Custom design', 'ROI-focused planning', 'Commercial net metering'],
  },
  {
    id: 'rooftop',
    title: 'Rooftop Solar Installation',
    description: 'Professional rooftop solar installation with structural assessment, coastal wind-load compliance, and DISCOM coordination.',
    icon: 'Sun',
    features: ['Site assessment', 'Structural certification', 'Professional mounting', 'System commissioning'],
  },
  {
    id: 'products',
    title: 'Solar Products',
    description: 'Quality solar panels, inverters, water heaters, street lights, pump controllers, and battery systems from trusted brands.',
    icon: 'Package',
    features: ['Solar panels', 'Solar inverters', 'Water heaters', 'Street lights & pump controllers'],
  },
  {
    id: 'maintenance',
    title: 'Service & Maintenance',
    description: 'Keep your solar system performing at its best with regular maintenance, cleaning, and performance monitoring.',
    icon: 'Wrench',
    features: ['Panel cleaning', 'Performance check', 'Inverter servicing', 'Warranty support'],
  },
] as const;

// ---- VERIFIED REVIEW THEMES ----
export const REVIEW_THEMES = [
  'Timely delivery',
  'Professional team',
  'Friendly & helpful staff',
  'Stress-free experience',
  'Quality products',
  'Speedy service',
  'Reliable & effort-oriented',
  'Knowledgeable team',
] as const;

// ---- MOCK REVIEWS (Based on verified themes — replace with actual reviews) ----
export const MOCK_REVIEWS = [
  {
    id: '1',
    name: 'Kiran R.',
    rating: 5,
    text: 'Very professional team. The solar panel installation was completed on time and the quality is excellent. Highly satisfied with the service.',
    source: 'Justdial' as const,
    isMock: true,
  },
  {
    id: '2',
    name: 'Ramesh K.',
    rating: 5,
    text: 'Friendly and helpful staff. Made the entire process stress-free. Would recommend Prasad Solar Services to everyone.',
    source: 'Justdial' as const,
    isMock: true,
  },
  {
    id: '3',
    name: 'Sunitha M.',
    rating: 5,
    text: 'Speedy service and good quality products. They explained everything about solar panels and net metering clearly.',
    source: 'Justdial' as const,
    isMock: true,
  },
  {
    id: '4',
    name: 'Anil P.',
    rating: 5,
    text: 'Reliable and trustworthy. They put in real effort to meet our requirements. Very good experience overall.',
    source: 'Justdial' as const,
    isMock: true,
  },
  {
    id: '5',
    name: 'Priya S.',
    rating: 5,
    text: 'Timely delivery and professional installation. The team was knowledgeable and answered all our questions about the subsidy process.',
    source: 'Justdial' as const,
    isMock: true,
  },
  {
    id: '6',
    name: 'Venkat G.',
    rating: 5,
    text: 'Great solar company in Kakinada. Good products and honest service. Our electricity bill has reduced significantly.',
    source: 'Justdial' as const,
    isMock: true,
  },
] as const;

// ---- MOCK PROJECTS (placeholder — replace with real project data) ----
export const MOCK_PROJECTS = [
  { id: '1', title: 'Residential Rooftop — Rayudupalem', type: 'Residential', capacity: '3 kW', description: 'Complete rooftop solar installation for an independent house', isMock: true },
  { id: '2', title: 'Home Solar — Gandhinagar', type: 'Residential', capacity: '5 kW', description: 'Grid-connected solar system with net metering', isMock: true },
  { id: '3', title: 'Commercial Setup — Bhanugudi', type: 'Commercial', capacity: '10 kW', description: 'Solar installation for a commercial establishment', isMock: true },
  { id: '4', title: 'Residential System — Jagannaickpur', type: 'Residential', capacity: '2 kW', description: 'PM Surya Ghar subsidised residential installation', isMock: true },
] as const;

// ---- INSTALLATION PROCESS ----
export const INSTALLATION_STEPS = [
  { step: 1, title: 'Consultation', description: 'Tell us about your electricity needs and property. We\'ll help you understand your options.', icon: 'MessageSquare' },
  { step: 2, title: 'Site Assessment', description: 'Our team visits your property to evaluate the roof, shading, and structural requirements.', icon: 'ClipboardCheck' },
  { step: 3, title: 'Custom Proposal', description: 'Receive a tailored solar plan with system sizing, costs, savings estimate, and subsidy details.', icon: 'FileText' },
  { step: 4, title: 'Installation', description: 'Professional installation by our experienced team with quality components and safety compliance.', icon: 'Hammer' },
  { step: 5, title: 'Commissioning', description: 'System testing, DISCOM paperwork, net meter installation, and subsidy application support.', icon: 'CheckCircle' },
  { step: 6, title: 'Start Saving', description: 'Your solar system is live! Enjoy reduced electricity bills and clean energy for your home.', icon: 'Zap' },
] as const;

// ---- FAQ ----
export const FAQ_ITEMS = [
  {
    question: 'How much does a solar panel system cost for a home in Kakinada?',
    answer: 'The cost of a residential solar system depends on the system size, which is determined by your monthly electricity consumption. A typical 3 kW system suitable for most homes costs between ₹1.5–2.5 lakh before subsidies. Contact us for a personalised quote based on your electricity bill.',
    isMock: true,
  },
  {
    question: 'What is the PM Surya Ghar subsidy and am I eligible?',
    answer: 'The PM Surya Ghar: Muft Bijli Yojana provides central government subsidies for residential rooftop solar: ₹30,000/kW for the first 2 kW, ₹18,000/kW for 2–3 kW, and a cap of ₹78,000 for systems above 3 kW. Most residential electricity consumers are eligible. SC/ST households in Andhra Pradesh may qualify for 100% subsidy.',
    isMock: false,
  },
  {
    question: 'How long does solar panel installation take?',
    answer: 'A typical residential installation is completed in 1–3 days. However, the overall process including DISCOM approval and net meter installation can take 30–60 days. We guide you through every step of the process.',
    isMock: true,
  },
  {
    question: 'Do you handle DISCOM paperwork and net metering?',
    answer: 'Yes. We assist with APEPDCL documentation, technical drawings (Single Line Diagram, General Arrangement, Earthing Diagram), feasibility approval, and net meter installation coordination. Our team handles the paperwork so you don\'t have to.',
    isMock: true,
  },
  {
    question: 'What maintenance do solar panels need?',
    answer: 'Solar panels require minimal maintenance — periodic cleaning (every 2–3 months) and an annual system health check. We offer maintenance services to keep your system performing optimally. Inverters typically need attention every 5–8 years.',
    isMock: true,
  },
  {
    question: 'How much can I save on my electricity bill with solar?',
    answer: 'Savings depend on your system size, electricity consumption, and local tariff rates. Most residential customers see 50–90% reduction in their electricity bills. With net metering, surplus power exported to the grid earns you credits. A typical 3 kW system can offset 300+ units per month.',
    isMock: true,
  },
  {
    question: 'Is my roof suitable for solar panels?',
    answer: 'Most roofs in Kakinada are suitable for solar installation. We conduct a thorough site assessment to evaluate roof condition, orientation, shading, and structural strength. Being a coastal area, we ensure compliance with IS 875 Part 3 wind-load standards for safe and durable installations.',
    isMock: true,
  },
] as const;

// ---- SERVICE AREAS ----
export const SERVICE_AREAS = {
  primary: 'Kakinada',
  areas: [
    { name: 'Kakinada', verified: true },
    { name: 'Rayudupalem', verified: true },
    { name: 'Samalkot', verified: false },
    { name: 'Peddapuram', verified: false },
    { name: 'Rajamahendravaram', verified: false },
    { name: 'Tuni', verified: false },
    { name: 'Amalapuram', verified: false },
    { name: 'Ramachandrapuram', verified: false },
  ],
} as const;

// ---- QUOTE FORM OPTIONS ----
export const REQUIREMENT_OPTIONS = [
  { value: 'home_solar', label: 'Home Solar', icon: 'Home', description: 'Solar panels for my house' },
  { value: 'commercial_solar', label: 'Commercial Solar', icon: 'Building2', description: 'Solar for business/office' },
  { value: 'installation', label: 'New Installation', icon: 'Hammer', description: 'Fresh solar setup' },
  { value: 'service_maintenance', label: 'Service / Maintenance', icon: 'Wrench', description: 'Existing system service' },
  { value: 'not_sure', label: 'Not Sure', icon: 'HelpCircle', description: 'Need guidance' },
] as const;

export const PROPERTY_OPTIONS = [
  { value: 'independent_house', label: 'Independent House', icon: 'Home' },
  { value: 'apartment', label: 'Apartment', icon: 'Building' },
  { value: 'commercial_building', label: 'Commercial Building', icon: 'Building2' },
  { value: 'factory', label: 'Factory / Industrial', icon: 'Factory' },
  { value: 'farm', label: 'Farm / Agricultural', icon: 'Tractor' },
  { value: 'other', label: 'Other', icon: 'MoreHorizontal' },
] as const;

export const BILL_OPTIONS = [
  { value: 'under_2000', label: 'Under ₹2,000' },
  { value: '2000_5000', label: '₹2,000 – ₹5,000' },
  { value: '5000_10000', label: '₹5,000 – ₹10,000' },
  { value: '10000_plus', label: '₹10,000+' },
  { value: 'not_sure', label: 'Not sure' },
] as const;

export const CONTACT_OPTIONS = [
  { value: 'call', label: 'Call Me', icon: 'Phone' },
  { value: 'whatsapp', label: 'WhatsApp', icon: 'MessageCircle' },
  { value: 'either', label: 'Either is fine', icon: 'ThumbsUp' },
] as const;

// ---- SUBSIDY DATA (VERIFIED) ----
export const SUBSIDY_INFO = {
  schemeName: 'PM Surya Ghar: Muft Bijli Yojana',
  tiers: [
    { range: 'Up to 2 kW', subsidy: '₹30,000 per kW', maxAmount: '₹60,000' },
    { range: '2 – 3 kW (additional)', subsidy: '₹18,000 per kW', maxAmount: '₹78,000' },
    { range: 'Above 3 kW', subsidy: 'Capped', maxAmount: '₹78,000' },
  ],
  scstBenefit: '100% subsidy for SC/ST households in Andhra Pradesh',
  freeUnits: 'Up to 300 units of free electricity per month',
  portal: 'https://pmsuryaghar.gov.in',
  discom: 'APEPDCL',
  verified: true,
} as const;

// ---- NAV LINKS ----
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const;
