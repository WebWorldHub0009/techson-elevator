import traction from "../assets/images/home/tracctioin.jpeg"
import hospital from "../assets/images/home/hospital.avif"
import chanel from "../assets/images/home/chanel.jpg"
import auto from "../assets/images/home/auto.avif"
import good from "../assets/images/home/goods.jpg"
import esc from "../assets/images/home/jeene.jpg"
import cap from "../assets/images/home/capsule.jpg"
import hydro from "../assets/images/home/hydrolic.jpg"
const  services = [
  {
    id: "traction-elevator",
    title: "Traction Elevator",
    slug: "/services/traction-elevator", 
    icon: "FaBuilding",
    image: traction,
    shortDescription: "High-performance elevators designed for smooth, fast, and efficient vertical transportation in residential and commercial spaces.",
    detailedDescription: [
      "Techson Elevator's traction elevators are engineered with world-class precision to deliver exceptional ride comfort, energy efficiency, and long-term reliability. These elevators operate using advanced traction mechanisms powered by counterweights and steel ropes, minimizing power consumption while maximizing speed and safety.",
      "Our traction elevators are ideal for high-rise and mid-rise buildings, offering customizable speed options and cabin designs to meet the unique demands of every project. Whether it's a corporate office, luxury apartment, or premium retail space, Techson ensures every ride is smooth, quiet, and secure."
    ],
    whyChoose: [
      "High-speed and energy-efficient operation",
      "Custom cabin finishes and smart control systems",
      "Minimal maintenance with robust build quality",
      "Proven track record in residential and commercial projects"
    ],
    keyFeatures: [
      "Load capacity from 320 kg to 2000 kg",
      "Speed range from 0.65 m/s to 3.0 m/s",
      "Advanced braking and safety systems",
      "Noise and vibration minimization technology"
    ],
    industries: [
      "Residential Apartments",
      "Corporate Towers",
      "Shopping Malls",
      "Hotels"
    ]
  },
  {
    id: "hospital-elevator",
    title: "Hospital Elevator",
    slug: "/services/hospital-elevator",
    icon: "FaHospital",
    image: hospital,
    shortDescription: "Spacious, reliable, and hygienic elevators designed specifically for hospitals, clinics, and healthcare facilities.",
    detailedDescription: [
      "In the medical field, every second counts. Techson Elevator’s hospital elevators are built with patient safety, comfort, and speed in mind. These elevators are spacious enough to carry stretchers, wheelchairs, and medical equipment effortlessly while ensuring a smooth and jerk-free ride.",
      "Our hospital elevators use antibacterial coatings, advanced air filtration systems, and precise leveling technology to provide a safe and hygienic environment for patients and healthcare staff."
    ],
    whyChoose: [
      "Spacious designs to accommodate stretchers and beds",
      "Silent operation to ensure patient comfort",
      "Antibacterial cabin materials for hygiene",
      "Highly reliable with emergency backup systems"
    ],
    keyFeatures: [
      "Capacity from 1000 kg to 2000 kg",
      "Precision leveling for stretcher access",
      "Smooth acceleration and deceleration",
      "Emergency power supply integration"
    ],
    industries: [
      "Hospitals",
      "Clinics",
      "Rehabilitation Centers",
      "Diagnostic Labs"
    ]
  },
  {
    id: "manual-door-elevator",
    title: "Manual Door Elevator",
    slug: "/services/manual-door-elevator",
    icon: "FaDoorClosed",
    image: chanel,
    shortDescription: "Durable and cost-effective elevators with manually operated sliding or swing doors.",
    detailedDescription: [
      "Techson Elevator’s manual door elevators are the perfect choice for budget-conscious projects without compromising on quality and safety. These elevators use traditional sliding or swing doors, making them ideal for residential complexes, small commercial buildings, and low-rise offices.",
      "Despite being manual, these elevators are designed for smooth operation, low maintenance, and long-term durability."
    ],
    whyChoose: [
      "Affordable without sacrificing quality",
      "Low maintenance requirements",
      "Proven reliability in low-rise projects",
      "Customizable cabin designs"
    ],
    keyFeatures: [
      "Capacity from 320 kg to 1000 kg",
      "Smooth door operation",
      "Mechanical and electrical safety locks",
      "Durable finishes"
    ],
    industries: [
      "Residential Buildings",
      "Small Offices",
      "Low-Rise Commercial Complexes"
    ]
  },
  {
    id: "auto-door-elevator",
    title: "Auto Door Elevator",
    slug: "/services/auto-door-elevator",
    icon: "FaDoorOpen",
    image: auto,
    shortDescription: "Modern, fully automatic elevators with sleek designs and advanced technology.",
    detailedDescription: [
      "Techson Elevator’s auto door elevators are the perfect blend of style, convenience, and technology. These elevators feature fully automatic sliding doors, eliminating the need for manual handling and ensuring a seamless user experience.",
      "Perfect for residential, commercial, and luxury spaces, these elevators are equipped with cutting-edge control systems, premium interiors, and unmatched safety features."
    ],
    whyChoose: [
      "Touchless operation for convenience",
      "Modern aesthetics and finishes",
      "Energy-efficient with low operational noise",
      "Ideal for both low and high-rise projects"
    ],
    keyFeatures: [
      "Capacity from 320 kg to 1600 kg",
      "Automatic sliding door mechanism",
      "Advanced microprocessor control",
      "Soft start and stop technology"
    ],
    industries: [
      "Luxury Apartments",
      "Office Buildings",
      "Shopping Centers"
    ]
  },
  {
    id: "goods-elevator",
    title: "Goods Elevator",
    slug: "/services/goods-elevator",
    icon: "FaDolly",
    image: good,
    shortDescription: "Heavy-duty elevators designed for transporting goods, materials, and equipment.",
    detailedDescription: [
      "Techson Elevator’s goods elevators are engineered to handle heavy loads with ease. Built with robust materials and advanced safety mechanisms, these elevators are essential for warehouses, factories, and large commercial buildings.",
      "They are available in various capacities and configurations, ensuring that even the most demanding industrial applications are met with efficiency and safety."
    ],
    whyChoose: [
      "Extreme durability for industrial use",
      "Custom load capacities",
      "Heavy-duty safety locks and braking systems",
      "Low maintenance for long service life"
    ],
    keyFeatures: [
      "Capacity from 500 kg to 5000 kg",
      "Extra-wide cabins",
      "Impact-resistant interiors",
      "Smooth and stable lifting"
    ],
    industries: [
      "Factories",
      "Warehouses",
      "Industrial Plants"
    ]
  },
  {
    id: "escalator",
    title: "Escalator",
    slug: "/services/escalator",
    icon: "FaRoad",
    image: esc,
    shortDescription: "Reliable and efficient escalators for malls, airports, and public spaces.",
    detailedDescription: [
      "Techson Elevator’s escalators are designed to handle high foot traffic with unmatched safety and performance. Built to international safety standards, our escalators feature anti-slip steps, emergency stop systems, and energy-efficient operation.",
      "Whether for a shopping mall, metro station, or airport, our escalators provide continuous, smooth, and reliable transportation."
    ],
    whyChoose: [
      "High-capacity, continuous operation",
      "Anti-slip safety steps",
      "Energy-efficient drive systems",
      "Customizable aesthetics"
    ],
    keyFeatures: [
      "Step width options from 600mm to 1000mm",
      "LED lighting for visibility",
      "Automatic start/stop sensors",
      "Emergency braking"
    ],
    industries: [
      "Shopping Malls",
      "Airports",
      "Railway Stations"
    ]
  },
  {
    id: "capsule-elevator",
    title: "Capsule Elevator",
    slug: "/services/capsule-elevator",
    icon: "FaRocket",
    image: cap,
    shortDescription: "Stylish panoramic glass elevators for premium buildings.",
    detailedDescription: [
      "Techson Elevator’s capsule elevators combine beauty with functionality, offering stunning panoramic views through their glass panels. Perfect for hotels, corporate buildings, and high-end malls, these elevators enhance the architectural appeal of any structure.",
      "Built with advanced engineering, they offer smooth rides, quiet operation, and customizable interiors."
    ],
    whyChoose: [
      "Premium panoramic glass design",
      "Perfect for luxury projects",
      "Customizable interiors and lighting",
      "Silent, smooth operation"
    ],
    keyFeatures: [
      "Capacity from 320 kg to 1000 kg",
      "Tempered glass panels",
      "LED mood lighting",
      "Soft start and stop"
    ],
    industries: [
      "Luxury Hotels",
      "Corporate Headquarters",
      "High-End Malls"
    ]
  },
  {
    id: "hydraulic-elevator",
    title: "Hydraulic Elevator",
    slug: "/services/hydraulic-elevator",
    icon: "FaWater",
    image: hydro,
    shortDescription: "Reliable elevators for low to mid-rise buildings, powered by hydraulic systems.",
    detailedDescription: [
      "Techson Elevator’s hydraulic elevators are ideal for buildings where machine room space is limited. They operate quietly, with smooth acceleration and deceleration, and are highly dependable for low to mid-rise projects.",
      "These elevators use high-quality hydraulic systems, ensuring long service life and minimal maintenance."
    ],
    whyChoose: [
      "Perfect for low-rise buildings",
      "Smooth and silent operation",
      "Minimal pit and overhead space required",
      "Cost-effective installation"
    ],
    keyFeatures: [
      "Capacity from 320 kg to 2000 kg",
      "Hydraulic power system",
      "Emergency lowering system",
      "Low noise operation"
    ],
    industries: [
      "Residential Villas",
      "Showrooms",
      "Warehouses"
    ]
  }
];
export default services
