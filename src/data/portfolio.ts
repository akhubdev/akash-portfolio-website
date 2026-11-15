
export const portfolioData = {
  personal: {
    name: "Akash Das",
    role: "Aspiring Data Analyst",

    education:
      "Graduated with a B.Tech in Computer Science and Engineering",

    graduationStatus: "Graduated",
    graduation: "May 2026",

    college: "Adarsha College of Engineering, Angul",
    university: "Biju Patnaik University of Technology, Odisha",
    cgpa: "8.03",

    interests: [
      "Retail Analytics",
      "E-commerce Analytics",
      "Supply Chain Analytics",
    ],

    email: "cchiku123456@gmail.com",
    github: "https://github.com/akhubdev",
    linkedin: "https://www.linkedin.com/in/akashdastech/",
  },

  skills: {
    technical: [
      "Advanced Excel",
      "Power BI",
      "SQL",
      "Python",
      "Pandas",
      "NumPy",
      "Machine Learning",
      "Generative AI",
    ],

    analytical: [
      "Data Cleaning",
      "Data Analysis",
      "Data Visualization",
      "Problem Solving",
      "Analytical Thinking",
    ],
  },

  experience: [
    {
      organization: "Syllogistek Systems Private Limited",
      title: "Data Science, ML & Deep Learning Using Python",
      duration: "4 June 2025 – 26 June 2025",
      type: "20-day Internship Program",
    },
  ],

  educationAndTraining: [
    {
      name: "Euron AI/ML Masters Course",
      status: "Completed",
    },
    {
      name: "Coding Ninjas Advanced Certification in Data Analytics with Generative AI",
      status: "In Progress",
    },
  ],

  projects: [
    {
  name: "India CPI Inflation Analysis",
  category: "Excel",
  overview:
    "An Excel-based data analytics case study examining India's Consumer Price Index (CPI) trends from 2017 to 2023, with a focus on inflation patterns, category contributions, food inflation, COVID-19 impact and imported oil price movements.",

  businessProblem:
    "Analyse Government of India CPI index data to identify inflation trends, understand category-level contributions and investigate how food prices, the COVID-19 pandemic and imported oil price fluctuations relate to inflation.",

  objectives: [
    "Analyse the contribution of broader CPI categories.",
    "Calculate and visualise annual Year-over-Year inflation trends from 2017 to 2023.",
    "Investigate monthly food inflation trends for June 2022 to May 2023.",
    "Compare category-level inflation before and after the COVID-19 onset in March 2020.",
    "Examine the relationship between imported oil price fluctuations and category-level inflation from 2021 to 2023.",
  ],

  tools: [
    "Microsoft Excel",
    "Pivot Tables",
    "Excel Formulas",
    "Charts and Data Visualisation",
    "CORREL Function",
    "Interactive Dashboard",
  ],

  dataset: {
    source: "Government of India (GOI)",
    type: "Consumer Price Index (CPI) dataset",
    period: "2017–2023",
    components: [
      "CPI Rural",
      "CPI Urban",
      "General Index",
    ],
    notes: [
      "CPI values represent index values, not direct price amounts.",
      "Missing values were identified as a data consideration in the problem statement.",
      "Equal category weights were assumed for this case study as instructed.",
    ],
  },

  analysis: [
    {
      title: "CPI Category Contribution",
      description:
        "Evaluated the contribution share of broader CPI categories using the 2023 index values.",
      findings: [
        "Pan, Tobacco & Intoxicants had the highest contribution at 9.31%.",
        "Transport & Communication had the lowest contribution at 7.63%.",
        "All category contribution shares together represented approximately 100%.",
      ],
    },
    {
      title: "Year-over-Year Inflation Trends",
      description:
        "Analysed annual inflation patterns from 2017 to 2023.",
      findings: [
        "2017: 5.3%",
        "2018: 2.3%",
        "2019: 7.7% — highest annual inflation in the analysis.",
        "2020: 5.8%",
        "2021: 5.7%",
        "2022: 6.0%",
        "2023: 1.5%",
      ],
      insight:
        "The presentation attributes the 2019 inflation spike largely to rising food prices, particularly vegetables and onions, alongside unseasonal rains and supply disruptions.",
    },
    {
      title: "Food Inflation Analysis",
      description:
        "Investigated monthly food inflation movements from June 2022 to May 2023.",
      findings: [
        "Highest monthly food inflation: +0.97% in October 2022.",
        "Lowest monthly food inflation: -1.36% in December 2022.",
        "Food index increased from 175.53 in June 2022 to approximately 178.87 in May 2023.",
        "Spices recorded the largest absolute increase of +30.47.",
        "Oils & Fats recorded the largest absolute decline of -29.97.",
      ],
    },
    {
      title: "COVID-19 Impact Analysis",
      description:
        "Compared category-level monthly inflation before and after March 2020.",
      findings: [
        "Food: 0.65% before COVID to 0.81% after COVID.",
        "Transport: 0.48% to 0.70%.",
        "Fuel: 0.45% to -0.19%.",
        "Health: 0.36% to 0.13%.",
        "General CPI: 0.50% to 0.42%.",
      ],
      insight:
        "The impact varied across categories rather than affecting all categories uniformly.",
    },
    {
      title: "Imported Oil and Inflation Relationship",
      description:
        "Compared monthly imported oil price movements with CPI category inflation from 2021 to 2023.",
      findings: [
        "Imported oil recorded its highest monthly increase of +20.0% in March 2022.",
        "Its sharpest monthly decline was -10.8% in December 2022.",
        "General CPI had the highest tested correlation with oil at 0.13.",
        "Food and Fuel correlations were 0.11, Transport was 0.09 and Health was 0.06.",
      ],
      insight:
        "All tested correlations were weak. Correlation indicates association, not causation.",
    },
  ],

  keyMetrics: {
    latestCPIIndex: 177.57,
    averageYoYInflation: "4.9%",
    highestAnnualYoYInflation: "7.7% in 2019",
    highestFoodMoMInflation: "+0.97% in October 2022",
    lowestFoodMoMInflation: "-1.36% in December 2022",
    highestCategoryContribution: "9.31%",
    strongestOilCorrelation: 0.13,
  },

  dashboardFeatures: [
    "CPI index trend",
    "Category contribution analysis",
    "Annual YoY inflation trend",
    "Monthly food inflation analysis",
    "COVID-19 before-and-after comparison",
    "Crude oil price trend",
    "Imported oil versus category inflation",
    "Oil correlation analysis",
    "Interactive filters and dashboard visuals",
  ],

  recommendations: [
    "Monitor food categories with significant price movements.",
    "Track imported oil alongside fuel and transport inflation.",
    "Use category-level analysis instead of relying only on headline CPI.",
    "Consider multiple economic factors when interpreting inflation movements.",
  ],

  limitations: [
    "The analysis follows the equal-category-weight assumption specified in the case study.",
    "Correlation results do not establish causation.",
    "The findings are based on the dataset and analysis presented in the project.",
  ],

  github:
    "https://github.com/akhubdev/india-cpi-inflation-analysis",
},
    
{
  name: "Gurgaon Traffic Violation Analysis",
  category: "Excel",
  overview:
    "An Excel-based data analytics case study focused on analyzing traffic violation patterns in Gurgaon. The project examines violation hotspots, violation categories, high-risk locations, repeat offenders, fine revenue, collection efficiency, and time-based trends to develop data-driven recommendations for better traffic management.",

  problemStatement:
    "Traffic violations can affect road safety and create challenges for enforcement authorities. The objective was to transform raw traffic violation records into meaningful insights that could help identify high-violation locations, understand common and high-risk violations, monitor repeat offenders, and evaluate fine collection patterns.",

  objectives: [
    "Identify locations with the highest number of traffic violations.",
    "Analyze the frequency and distribution of different violation types.",
    "Identify locations with concentrated DUI and speeding violations.",
    "Understand repeat-offender patterns.",
    "Examine fine revenue and collection efficiency.",
    "Analyze time-based and seasonal violation trends.",
    "Develop practical recommendations for targeted traffic enforcement."
  ],

  technologies: [
    "Microsoft Excel",
    "Excel Tables",
    "Excel Formulas",
    "PivotTables",
    "Charts and Data Visualization",
    "Interactive Excel Dashboard"
  ],

  dataset: {
    name: "Gurgaon Traffic Violation Records",
    records: 1000,
    period: "January–December 2024",
    description:
      "A dataset containing traffic violation records with violation, location, date, fine, and offender-related information."
  },

  workflow: [
    {
      step: "Data Preparation and Cleaning",
      details: [
        "Reviewed the raw traffic violation records.",
        "Removed duplicate entries.",
        "Handled missing values.",
        "Standardized text and category values.",
        "Checked date and numeric fields.",
        "Prepared a structured Excel Table for analysis."
      ]
    },
    {
      step: "Exploratory Data Analysis",
      details: [
        "Examined violation frequency across locations.",
        "Compared the distribution of violation categories.",
        "Analyzed high-risk DUI and speeding violations.",
        "Reviewed repeat-offender patterns.",
        "Examined fine revenue and collection efficiency.",
        "Explored time-based and monthly trends."
      ]
    },
    {
      step: "Pivot Reporting and Dashboard",
      details: [
        "Organized analysis using Excel PivotTables.",
        "Created charts to communicate violation patterns.",
        "Developed an interactive dashboard with key metrics and filters.",
        "Presented findings through visual reports."
      ]
    }
  ],

  dashboardMetrics: [
    {
      name: "Total Violations",
      value: "1,000"
    },
    {
      name: "Total Revenue",
      value: "₹39,01,076"
    },
    {
      name: "Repeat Offender Percentage",
      value: "34%"
    },
    {
      name: "Collection Efficiency",
      value: "34%"
    }
  ],

  keyFindings: [
    {
      area: "Violation Hotspots",
      findings: [
        "Sikanderpur recorded the highest number of violations with 89 cases.",
        "Sector 29 followed with 74 cases.",
        "Sohna Road near Iris Tech Park, Cyber City, Sector 56, and NH-8 each recorded 71 violations."
      ]
    },
    {
      area: "Violation Type Analysis",
      findings: [
        "Wrong-side driving was the most frequently recorded violation with 205 cases.",
        "Red-light jumps accounted for 192 cases.",
        "No-seatbelt violations accounted for 191 cases.",
        "DUI recorded 175 cases, while speeding recorded 174 cases.",
        "No-helmet violations were comparatively lower at 63 cases."
      ]
    },
    {
      area: "High-Risk Violation Analysis",
      findings: [
        "Sikanderpur recorded the highest speeding count with 18 cases.",
        "Cyber City recorded 16 DUI cases.",
        "Cyber City also recorded 16 speeding cases.",
        "DUI and speeding were almost equally frequent across the dataset."
      ]
    },
    {
      area: "Revenue and Repeat Offenders",
      findings: [
        "The dashboard reported total revenue of ₹39,01,076.",
        "The dashboard reported 34% repeat offenders.",
        "The dashboard reported 34% collection efficiency."
      ]
    }
  ],

  recommendations: [
    "Prioritize high-violation locations such as Sikanderpur, Sector 29, and other identified hotspots.",
    "Focus enforcement and awareness efforts on wrong-side driving, red-light jumps, no-seatbelt violations, DUI, and speeding.",
    "Strengthen monitoring during evening and night hours, when the dashboard indicates relatively higher violation activity.",
    "Improve repeat-offender monitoring to identify recurring violations and support targeted enforcement."
  ],

  limitations: [
    "The analysis is based on the 1,000 records and the January–December 2024 period covered by the case study.",
    "The findings describe patterns in the available dataset and should not automatically be treated as proof of the causes of violations.",
    "The case study proposes enforcement recommendations; it does not establish that those recommendations have been implemented or reduced violations.",
    "Detailed numerical results for every question in the original case-study guidelines are not documented in the final presentation."
  ],

  github:
    "https://github.com/akhubdev/gurgaon-traffic-violation-analysis-excel"
},

    
{
  name: "Netflix Content Analytics Dashboard",
  category: "Power BI",

  overview:
    "An interactive Power BI dashboard developed to analyse Netflix movies and TV shows, exploring content distribution, release trends, IMDb ratings, popularity, audience categories and individual title-level performance.",

  objectives: [
    "Analyse the distribution of Netflix movies and TV shows.",
    "Explore content release trends across different years.",
    "Understand IMDb rating and popularity categories.",
    "Analyse audience categories across Netflix content.",
    "Enable interactive exploration through dashboard slicers.",
    "Present key content metrics through an integrated dashboard."
  ],

  dataset: {
    records: 5283,
    contentTypes: ["Movies", "TV Shows"],
    description:
      "Netflix movie and TV show records containing title-level information, IMDb scores, IMDb votes, runtime, release year, content type and other analytical fields."
  },

  technologies: [
    "Microsoft Power BI",
    "Power Query",
    "DAX",
    "Data Cleaning",
    "Data Transformation",
    "Data Visualization",
    "Dashboard Design"
  ],

  workflow: [
    {
      step: "Data Import and Review",
      details: [
        "Imported and reviewed the raw Netflix dataset.",
        "Examined the available fields and data structure."
      ]
    },
    {
      step: "Data Cleaning and Transformation",
      details: [
        "Used Power Query for data preparation and transformation.",
        "Prepared fields and handled data-quality issues.",
        "Created additional analytical categories."
      ]
    },
    {
      step: "Calculated Fields",
      details: [
        "Created Rating*Votes using IMDb score multiplied by IMDb votes.",
        "Created runtime_hrs using DAX to convert runtime minutes into hours.",
        "Created additional categories used in dashboard analysis."
      ]
    },
    {
      step: "Dashboard Development",
      details: [
        "Designed KPI cards, charts, tables and interactive visuals.",
        "Created content distribution and release trend analysis.",
        "Added slicers for dynamic content exploration."
      ]
    }
  ],

  keyMetrics: {
    totalTitles: "5.283K",
    totalMovies: "3.407K",
    totalTVShows: "1.876K",
    averageIMDbRating: "7.00",
    movieContentShare: "64%",
    TVShowContentShare: "36%"
  },

  analysis: [
    {
      title: "Content Distribution",
      findings: [
        "Movies account for 64% of the displayed content mix.",
        "TV Shows account for 36%.",
        "The dataset contains 3.407K movies and 1.876K TV shows."
      ]
    },
    {
      title: "Release Trends",
      findings: [
        "Analysed year-wise content counts for Movies and TV Shows.",
        "The dashboard shows substantially higher content volume in later years than in earlier years."
      ]
    },
    {
      title: "Popularity Analysis",
      findings: [
        "Segmented content into Low, Medium, High and Unknown popularity categories.",
        "Popularity categories were based on audience voting volume."
      ]
    },
    {
      title: "IMDb Rating Analysis",
      findings: [
        "Grouped content into High, Medium and Low IMDb rating categories.",
        "Used rating distribution visuals to compare content ratings."
      ]
    },
    {
      title: "Audience Analysis",
      findings: [
        "Created audience categories: Unknown, Adult, Teen and Kids/Family.",
        "Used category distribution to explore audience classification."
      ]
    },
    {
      title: "Title-Level Analysis",
      findings: [
        "Created a title-level table containing title, average IMDb score and average IMDb votes.",
        "Included IMDb links for individual title reference."
      ]
    }
  ],

  dashboardFeatures: [
    "Total Titles KPI",
    "Total Movies KPI",
    "Total TV Shows KPI",
    "Average IMDb Rating KPI",
    "Content by Type Donut Chart",
    "Year-wise Content Release Trend",
    "Content by Popularity",
    "Content by Rating",
    "Audience by Category",
    "Title-Level Analysis Table",
    "Interactive Type Slicer",
    "Rating Category Slicer",
    "Release Era Slicer"
  ],

  slicers: [
    {
      name: "Type",
      purpose: "Filter dashboard content between Movies and TV Shows."
    },
    {
      name: "Rating Category",
      purpose: "Explore content by IMDb rating category."
    },
    {
      name: "Release Era",
      purpose: "Filter content according to release-era categories."
    }
  ],

  keyInsights: [
    "The dashboard contains 5,283 titles: 3,407 movies and 1,876 TV shows.",
    "Movies represent 64% of the displayed content mix.",
    "TV Shows represent 36% of the displayed content mix.",
    "The dashboard average IMDb rating is 7.00.",
    "Content volume is substantially higher in the later release years shown.",
    "Combining KPIs, category analysis, trends and title-level details provides a consolidated view of the content catalogue."
  ],

  limitations: [
    "The findings represent the dataset and dashboard presented in this project.",
    "Popularity and rating categories follow the project's classification approach.",
    "The dashboard describes content distribution and IMDb-based indicators; it does not establish actual Netflix viewership or subscriber behaviour."
  ],

  deliverables: [
    "Interactive Power BI dashboard (.pbix)",
    "Project presentation",
    "Dashboard interaction screen recording"
  ],

  github:
    "https://github.com/akhubdev/netflix-movie-shows-dashboard-powerbi"
},

    
{
  name: "Brazilian E-commerce Analytics – Olist",
  category: "Power BI",

  overview:
    "An end-to-end e-commerce analytics case study built using Power BI to understand the business performance of the Brazilian Olist marketplace. The project explores how orders, revenue, customers, products, payments, delivery performance, geographic distribution and customer reviews connect to the overall customer and business experience. The objective was to transform multiple related datasets into an interactive business intelligence solution that helps stakeholders investigate performance, identify patterns and ask better business questions.",

  businessContext:
    "An e-commerce marketplace generates data across the complete order journey. Looking at sales alone does not explain why customers buy, which products perform well, where sellers and customers are concentrated, how payments are made or whether customers are satisfied. This project brings these different business areas together to provide a connected view of marketplace performance.",

  businessProblem:
    "The key analytical challenge was to understand the marketplace beyond headline sales numbers. The analysis needed to investigate where revenue comes from, how customer and product performance varies, how payment behaviour differs, where customers and sellers are located, and what delivery and review indicators reveal about the customer experience.",

  businessObjectives: [
    "Build a consolidated view of marketplace performance.",
    "Understand order volume, revenue trends and year-over-year growth.",
    "Analyse customer acquisition, customer growth and repeat-customer behaviour.",
    "Identify high-performing product categories and examine price and freight-cost patterns.",
    "Understand payment methods, payment values and installment behaviour.",
    "Explore customer and seller distribution across Brazilian states and cities.",
    "Evaluate review scores and customer feedback patterns.",
    "Investigate delivery performance using order status and on-time delivery indicators.",
    "Convert the analysis into useful business insights for decision-making."
  ],

  analyticalApproach: [
    {
      stage: "1. Understand the Business Questions",
      questions: [
        "How is the marketplace performing in terms of orders and revenue?",
        "Are sales increasing or decreasing over time?",
        "Which states and product categories contribute most to sales?",
        "Are customers mostly new or returning?",
        "Which customers and cities contribute to customer activity?",
        "Which product categories perform strongly?",
        "Which payment methods dominate transaction value?",
        "How are installment payments distributed?",
        "Where are customers and sellers geographically concentrated?",
        "Are orders being delivered successfully and on time?",
        "What do review scores indicate about customer satisfaction?"
      ]
    },
    {
      stage: "2. Explore and Understand the Data",
      details: [
        "Reviewed the different business entities represented in the dataset.",
        "Understood how orders, customers, products, sellers, payments, reviews and locations relate to each other.",
        "Identified the relevant fields required for sales, customer, product, payment, delivery and review analysis."
      ]
    },
    {
      stage: "3. Data Preparation with Power Query",
      details: [
        "Used Power Query for data profiling, cleaning and transformation.",
        "Prepared the source tables for consistent reporting.",
        "Organised the data to support relationships and analytical calculations."
      ]
    },
    {
      stage: "4. Data Modeling",
      details: [
        "Connected Customers, Orders, Order Items, Payments, Reviews, Products, Sellers, Geolocation and Category Translation tables.",
        "Created a DateTable connected to order dates for time-based analysis.",
        "Connected Order Items with Orders, Products and Sellers.",
        "Connected Payments and Reviews back to Orders.",
        "Aggregated geolocation information at ZIP-prefix level for geographic visualisation.",
        "Designed relationships to support cross-filtering and analysis across business areas."
      ]
    },
    {
      stage: "5. DAX and Business Calculations",
      details: [
        "Created reusable DAX measures for KPIs and business metrics.",
        "Developed calculations for sales, revenue, orders and customer metrics.",
        "Used the DateTable for time intelligence and year-over-year analysis.",
        "Built measures supporting delivery, payment and review analysis."
      ]
    },
    {
      stage: "6. Dashboard Development",
      details: [
        "Developed seven interactive Power BI report pages.",
        "Used KPI cards, trend charts, bar charts, matrices, maps and slicers.",
        "Added page navigation to connect the different analytical views.",
        "Enabled users to investigate results by year, month, state, product category, payment type and other relevant dimensions."
      ]
    }
  ],

  businessQuestions: [
    {
      area: "Sales and Revenue",
      questions: [
        "What are the total orders and total revenue?",
        "How do revenue and order volumes change over time?",
        "Which product categories contribute the most to sales?",
        "Which states generate higher product sales?",
        "How does year-over-year sales growth change?",
        "What is the average order value?",
        "What proportion of orders are delivered and on time?"
      ],
      businessPurpose:
        "Understand overall marketplace performance, identify important sales contributors and investigate changes in revenue and order activity."
    },
    {
      area: "Customer Analytics",
      questions: [
        "How many unique customers are represented in the dataset?",
        "How is the customer base growing over time?",
        "How many customers are new versus repeat customers?",
        "What percentage of customers are repeat customers?",
        "Which states and cities have the largest customer populations?",
        "Who are the top customers by revenue?"
      ],
      businessPurpose:
        "Understand customer growth, repeat behaviour and geographic concentration to support customer retention and engagement analysis."
    },
    {
      area: "Product Analytics",
      questions: [
        "Which product categories generate the highest sales?",
        "How many products are sold across categories?",
        "How does product price distribution vary?",
        "What is the relationship between product sales and order counts?",
        "How do freight costs change over time?",
        "Which categories should receive closer performance attention?"
      ],
      businessPurpose:
        "Evaluate product-category performance and understand price and freight-cost patterns that may influence marketplace performance."
    },
    {
      area: "Payment Analytics",
      questions: [
        "Which payment methods are most commonly used?",
        "Which payment method contributes the highest payment value?",
        "How are payment values distributed across installment counts?",
        "What is the average number of installments?",
        "How does average payment value vary by installment count?",
        "How do payment patterns change over time?"
      ],
      businessPurpose:
        "Understand transaction behaviour, payment preferences and installment patterns to support payment and checkout analysis."
    },
    {
      area: "Geolocation Analytics",
      questions: [
        "Where are customers concentrated across Brazilian states?",
        "Where are sellers located?",
        "Which cities have the highest customer counts?",
        "How does seller distribution differ from customer distribution?",
        "Which geographic areas show a strong marketplace presence?"
      ],
      businessPurpose:
        "Understand the geographic distribution of marketplace participants and identify important customer and seller locations."
    },
    {
      area: "Reviews and Customer Experience",
      questions: [
        "What is the average customer review score?",
        "How are review scores distributed?",
        "How does average review score change over time?",
        "Which product categories receive higher average review scores?",
        "Which states contribute more customer reviews?",
        "What patterns appear in recent customer feedback?"
      ],
      businessPurpose:
        "Evaluate customer feedback and identify areas where product or service experience may need further investigation."
    }
  ],

  dashboardPages: [
    {
      name: "Overview Dashboard",
      purpose:
        "Provides an executive-level summary of orders, revenue, customers, average order value, reviews, delivery status and high-level trends."
    },
    {
      name: "Sales Analytics",
      purpose:
        "Examines revenue and order trends, product category performance, state-level sales, payment mix and year-over-year growth."
    },
    {
      name: "Customer Analytics",
      purpose:
        "Explores customer growth, new versus repeat customers, customer distribution by state and city, and top customers by revenue."
    },
    {
      name: "Products Analytics",
      purpose:
        "Investigates product sales, category performance, price distribution, products sold and freight-cost patterns."
    },
    {
      name: "Payments Analytics",
      purpose:
        "Analyses payment values, payment methods, installment counts and transaction-level payment patterns."
    },
    {
      name: "Geolocation Analytics",
      purpose:
        "Visualises customer and seller distribution across Brazilian states, cities and ZIP-code prefixes."
    },
    {
      name: "Reviews Analytics",
      purpose:
        "Examines review-score distribution, score trends, category-level ratings, state activity and recent customer feedback."
    }
  ],

  keyMetrics: {
    totalOrders: "99K",
    totalRevenue: "16.01M",
    uniqueCustomers: "96K",
    averageReviewScore: 4.09,
    averageOrderValue: 160.99,
    deliveredOrderRate: "97.02%",
    onTimeDeliveryRate: "94.96%",
    newCustomers: "93K",
    repeatCustomers: "3K",
    repeatCustomerPercentage: "3.12%",
    averageOrdersPerCustomer: 1.03,
    topProductCategory: "beleza_saude",
    dominantPaymentMethod: "credit_card",
    creditCardShareByPaymentValue: "78.34%",
    positiveReviews: "77.14%"
  },

  keyFindings: [
    {
      area: "Overall Marketplace Performance",
      finding:
        "The overview dashboard reports approximately 99K orders, 16.01M total revenue and 96K unique customers. The average order value is 160.99 and the average review score is 4.09."
    },
    {
      area: "Customer Behaviour",
      finding:
        "The customer dashboard reports approximately 93K new customers and 3K repeat customers, with a repeat-customer percentage of 3.12%. This makes repeat-customer behaviour an important area for further investigation."
    },
    {
      area: "Delivery Performance",
      finding:
        "The overview dashboard reports a 97.02% delivered-order rate, while the Sales dashboard reports 94.96% on-time delivery. These are different indicators and should not be treated as interchangeable."
    },
    {
      area: "Product Performance",
      finding:
        "The beleza_saude product category is identified as the top product category by product sales in the dashboard."
    },
    {
      area: "Payment Behaviour",
      finding:
        "Credit card is the dominant payment method by value, accounting for 78.34% in the Payments dashboard. The dashboard also reports an average of 2.85 installments."
    },
    {
      area: "Geographic Distribution",
      finding:
        "São Paulo leads the customer distribution by city, while SP leads state-level customer activity. The dashboard also compares seller and customer geographic distribution."
    },
    {
      area: "Customer Reviews",
      finding:
        "The average review score is 4.09 and positive reviews are shown at 77.14%. The Reviews dashboard also provides score distribution and category-level rating comparisons."
    }
  ],

  businessInterpretation: [
    "A large customer base does not automatically mean strong customer retention. The repeat-customer metric should be investigated separately.",
    "A high delivered-order rate and a lower on-time delivery rate indicate that successful delivery and timely delivery answer different business questions.",
    "Strong sales in a product category can help identify important commercial categories, but profitability cannot be concluded from sales alone.",
    "A dominant payment method helps describe customer payment preferences, while installment analysis adds another dimension to transaction behaviour.",
    "Geographic concentration of customers and sellers can help stakeholders investigate regional marketplace coverage.",
    "Review scores provide a useful customer feedback indicator, but should be examined alongside delivery and product-category information."
  ],

  businessRecommendations: [
    "Investigate why repeat-customer activity is relatively low and explore customer retention opportunities.",
    "Compare delivered orders with on-time deliveries to identify potential delivery delays.",
    "Monitor high-performing product categories and investigate their sales, order volume and freight-cost patterns.",
    "Review payment method and installment patterns to better understand transaction preferences.",
    "Use customer and seller location analysis to investigate geographic coverage and regional opportunities.",
    "Combine review scores with category and location filters to identify areas that may require customer-experience improvements.",
    "Use year and month filters to monitor business performance and identify changes that require further investigation."
  ],

  dashboardInteractivity: [
    "Year slicer",
    "Year-Month slicer",
    "Customer state slicer",
    "Product category slicer",
    "Payment type slicer",
    "Order status slicer",
    "Review score slicer",
    "Customer and seller geographic maps",
    "Interactive matrices and charts",
    "Seven-page report navigation"
  ],

  limitations: [
    "Dashboard findings describe the available Olist dataset and the measures displayed in the project.",
    "The reported metrics are rounded dashboard values.",
    "Revenue, product sales and payment value are different measures and should not be assumed to be identical.",
    "The repeat-customer percentage should be interpreted according to the project's customer classification and measure definition.",
    "The dashboard identifies patterns and associations; it does not independently prove the causes of customer behaviour, delivery delays or review scores.",
    "Profitability, marketing campaign effectiveness and customer lifetime value are not established by the documented dashboard findings."
  ],

  skillsDemonstrated: [
    "Business problem understanding",
    "Analytical questioning",
    "Data profiling",
    "Power Query data preparation",
    "Data modeling and relationships",
    "DateTable creation",
    "DAX measures",
    "Time intelligence",
    "KPI development",
    "Interactive dashboard design",
    "Geographic analysis",
    "Business insight communication"
  ],

  deliverables: [
    "Seven-page interactive Power BI dashboard",
    "Project presentation",
    "Business analysis and dashboard insights"
  ],

  github:
    "https://github.com/akhubdev/olist-e-commerce-analytics-powerbi"
},

    
{
  name: "Blinkit Sales & Business Performance Dashboard",
  category: "Power BI",

  overview:
    "An interactive Power BI sales analytics project built using a Kaggle BlinkIT grocery sample dataset. The project investigates how product categories, fat content, outlet characteristics, outlet size and location tiers are associated with sales performance. The objective is to turn raw grocery sales records into an interactive report that helps stakeholders compare product and outlet performance.",

  businessContext:
    "Headline sales figures alone do not explain what is driving grocery sales performance. Business stakeholders need to understand which item types contribute more sales, how regular and low-fat products compare, and whether outlet size, location tier or establishment year is associated with stronger sales. This dashboard provides a structured way to investigate these questions.",

  businessProblem:
    "The challenge was to move beyond total sales and understand the differences in sales performance across product groups and outlet characteristics. The analysis focuses on identifying patterns and comparisons rather than assuming that a particular product or outlet characteristic causes higher sales.",

  businessObjectives: [
    "Understand the overall sales performance of the grocery dataset.",
    "Compare sales across different item types.",
    "Analyse sales contribution by fat content.",
    "Compare outlet performance across location tiers.",
    "Understand how outlet size relates to sales.",
    "Explore sales by outlet establishment year.",
    "Build an interactive dashboard for business users.",
    "Translate observed patterns into practical areas for further investigation."
  ],

  dataset: {
    name: "BlinkIT Grocery Data.xlsx",
    source: "Kaggle sample dataset",
    records: 8523,
    outlets: 10,
    description:
      "A grocery sales sample dataset containing item-level sales information, product characteristics, fat-content classifications and outlet-related attributes."
  },

  technologies: [
    "Microsoft Power BI Desktop",
    "Power Query",
    "DAX",
    "Data Cleaning",
    "KPI Measures",
    "Interactive Slicers",
    "Data Visualization"
  ],

  analyticalApproach: [
    {
      stage: "1. Understand the Business Problem",
      questions: [
        "Which item types contribute the most sales?",
        "How do sales differ between regular-fat and low-fat products?",
        "How do outlet size and location tiers compare?",
        "How do sales vary by outlet establishment year?",
        "Which product and outlet segments deserve closer investigation?"
      ]
    },
    {
      stage: "2. Inspect and Prepare the Data",
      details: [
        "Reviewed the grocery dataset and its available fields.",
        "Standardized inconsistent fat-content labels.",
        "Checked missing item-weight values.",
        "Prepared the data for consistent reporting using Power Query."
      ]
    },
    {
      stage: "3. Create DAX Measures",
      details: [
        "Created measures for total sales.",
        "Calculated average sales.",
        "Created item-count and outlet-count measures.",
        "Created average rating and item-visibility measures.",
        "Used measures to support KPI cards and interactive comparisons."
      ]
    },
    {
      stage: "4. Design the Dashboard",
      details: [
        "Created KPI cards for major performance indicators.",
        "Built item-type and fat-content comparison charts.",
        "Compared outlet performance by location tier and size.",
        "Added outlet establishment-year analysis.",
        "Created a summary table for outlet-level comparisons."
      ]
    },
    {
      stage: "5. Enable Interactive Exploration",
      details: [
        "Added slicers for outlet location tier, outlet size and outlet type.",
        "Created a metric selector to switch between sales, average sales, item count and average rating.",
        "Enabled interactive comparisons across product and outlet segments."
      ]
    }
  ],

  businessQuestions: [
    {
      area: "Product Performance",
      questions: [
        "Which item types generate the highest sales?",
        "Are Fruits & Vegetables and Snack Foods leading the sales contribution?",
        "How do different product groups compare?",
        "Which categories should be investigated for assortment and availability?"
      ],
      purpose:
        "Identify important product categories and understand how sales are distributed across the grocery assortment."
    },
    {
      area: "Fat Content Analysis",
      questions: [
        "How much sales contribution comes from regular-fat products?",
        "How do low-fat products compare with regular-fat products?",
        "Does the sales difference remain visible across outlet segments?",
        "Should product assortment decisions consider demand and profitability alongside sales?"
      ],
      purpose:
        "Understand the sales mix by fat-content classification without assuming that sales alone indicate demand or profitability."
    },
    {
      area: "Outlet Performance",
      questions: [
        "Which location tier records the highest sales?",
        "How do Tier 1, Tier 2 and Tier 3 outlets compare?",
        "How does outlet size relate to sales?",
        "Which outlet characteristics should be investigated further?"
      ],
      purpose:
        "Compare outlet segments and identify where further operational investigation may be useful."
    },
    {
      area: "Outlet Establishment Analysis",
      questions: [
        "How do sales vary across outlet establishment years?",
        "Do outlets established in different years show different sales levels?",
        "Are there visible differences that require further investigation?"
      ],
      purpose:
        "Explore the relationship between outlet establishment year and displayed sales performance."
    }
  ],

  keyMetrics: {
    totalSales: "$1.20M",
    totalRecords: "8,523",
    totalOutlets: 10,
    averageSales: "$140.99",
    averageRating: "3.92 / 5",
    averageItemVisibility: 0.0661
  },

  keyFindings: [
    {
      area: "Overall Sales",
      findings: [
        "The dashboard reports approximately $1.20M in total sales across 8,523 item records.",
        "Average sales are approximately $140.99.",
        "The average item rating is 3.92 out of 5."
      ]
    },
    {
      area: "Fat Content",
      findings: [
        "Regular-fat products contribute approximately $776.32K in sales.",
        "Low-fat products contribute approximately $425.36K in sales.",
        "Regular-fat products have the larger displayed sales contribution."
      ]
    },
    {
      area: "Item Type",
      findings: [
        "Fruits & Vegetables and Snack Foods are the leading item types.",
        "Each contributes approximately $0.18M in sales."
      ]
    },
    {
      area: "Outlet Location",
      findings: [
        "Tier 3 outlets lead the displayed location comparison.",
        "Their reported sales are approximately $472.13K."
      ]
    }
  ],

  businessInterpretation: [
    "The total sales KPI provides an overall performance baseline, but product and outlet comparisons are needed to understand how that performance is distributed.",
    "The larger sales contribution from regular-fat products is an observed sales-mix difference. It does not independently establish higher profitability or customer preference.",
    "Fruits & Vegetables and Snack Foods deserve attention because they are the leading item types in the displayed sales analysis.",
    "Tier 3 outlets lead the displayed location comparison, but the reasons behind this difference require further operational investigation.",
    "Outlet establishment-year comparisons can reveal patterns, but the available sample does not prove that outlet age causes higher or lower sales."
  ],

  dashboardFeatures: [
    "Total Sales KPI",
    "Average Sales KPI",
    "Number of Items KPI",
    "Average Rating KPI",
    "Total Outlets KPI",
    "Average Item Visibility KPI",
    "Sales by Fat Content",
    "Sales by Item Type",
    "Outlet Establishment Analysis",
    "Outlet Size Comparison",
    "Outlet Location Tier Comparison",
    "Outlet Summary Table",
    "Outlet Location Tier Slicer",
    "Outlet Size Slicer",
    "Outlet Type Slicer",
    "Interactive Metric Selector"
  ],

  businessRecommendations: [
    "Review availability and assortment for Fruits & Vegetables and Snack Foods.",
    "Investigate what differentiates Tier 3 outlets before considering whether their practices can be replicated.",
    "Compare regular-fat and low-fat sales with product margins and demand before making assortment decisions.",
    "Investigate outlet-size and establishment-year differences using additional operational information.",
    "Add transaction dates, units sold, margins and order-level information to support deeper sales and profitability analysis."
  ],

  limitations: [
    "The dataset is a Kaggle educational sample, not verified internal Blinkit transaction data.",
    "The dataset does not provide transaction dates for reliable monthly sales trend analysis.",
    "Customer IDs are unavailable, so customer-level behaviour and retention cannot be analysed.",
    "Sales comparisons do not establish product profitability because margin data is not documented.",
    "The findings are descriptive and do not establish cause and effect.",
    "Recommendations should be validated with operational and profitability data before implementation."
  ],

  skillsDemonstrated: [
    "Business problem understanding",
    "Analytical questioning",
    "Power Query data cleaning",
    "DAX measures",
    "KPI development",
    "Product performance analysis",
    "Outlet performance analysis",
    "Interactive dashboard development",
    "Business insight communication"
  ],

  github:
    "https://github.com/akhubdev/blinkit-grocery-sales-analysis"
},

    
{
  name: "HealthGuard AI",
  category: "Python & Machine Learning",

  overview:
    "An academic healthcare analytics project that uses a trained machine learning model to estimate diabetes risk from selected health indicators through a Flask web application.",

  problemStatement:
    "Explores how health and lifestyle indicators can be used in a machine learning workflow to estimate diabetes risk and present predictions through an accessible web interface.",

  objectives: [
    "Build a machine learning model for diabetes risk prediction",
    "Integrate the trained model with a Flask application",
    "Present predictions through an interactive interface",
    "Maintain prediction history using SQLite",
    "Generate downloadable PDF reports",
    "Display healthcare analytics through a dashboard"
  ],

  technologies: [
    "Python",
    "Flask",
    "Scikit-learn",
    "SQLite",
    "HTML",
    "CSS",
    "JavaScript",
    "ReportLab"
  ],

  dataset: {
    name: "Diabetes Health Indicators Dataset",
    source: "BRFSS 2015",
    file: "diabetes_012_health_indicators_BRFSS2015.csv"
  },

  workflow: [
    "Use health-indicator data for the diabetes prediction task",
    "Prepare selected input features",
    "Train a machine learning model using Scikit-learn",
    "Save the trained model for application use",
    "Pass user-submitted indicators to the trained model",
    "Display the prediction through the Flask application",
    "Store prediction history and support PDF report generation"
  ],

  features: [
    "Diabetes Risk Prediction",
    "Healthcare Analytics Dashboard",
    "Prediction History",
    "PDF Report Generation",
    "SQLite Database Integration",
    "User Authentication",
    "Flask-based Web Interface"
  ],

  modelEvaluation: {
    metrics: [
      "Accuracy",
      "Precision",
      "Recall",
      "F1-score",
      "Confusion Matrix"
    ],
    verifiedResultsAvailable: false,
    note:
      "Actual model evaluation scores have not yet been documented."
  },

  limitations: [
    "Educational prototype, not a clinically validated medical tool",
    "Predictions depend on the dataset and selected input features",
    "Dataset patterns may not generalize to every population",
    "Verified model-performance metrics are not currently documented"
  ],

  github: "https://github.com/akhubdev/HealthGuard-AI",

  liveDemo: "https://healthguard-ai-x9xd.onrender.com",

  disclaimer:
    "This project is for academic and educational purposes only. It is not a medical diagnostic tool and must not be used to make healthcare decisions."
},

    {
  name: "Civic AI",
  category: "Python & Development",
  overview:
    "CivicAI is an AI-powered Community Issue Intelligence Platform designed to simplify public infrastructure issue reporting and analysis.",
  objectives: [
    "Make community issue reporting easier.",
    "Use AI to analyse reported issues.",
    "Recommend issue categories, severity and responsible departments.",
    "Support better tracking and analysis of community complaints.",
  ],
  technologies: [
    "Python",
    "Flask",
    "Google Gemini 2.5 Flash",
    "SQLite",
    "HTML",
    "CSS",
    "JavaScript",
    "Chart.js",
  ],
  features: [
    "AI-powered image analysis",
    "Issue category and severity detection",
    "Department and priority recommendations",
    "Interactive analytics dashboard",
    "Complaint history",
    "PDF report generation",
    "Authentication",
    "Notifications",
    "Smart maps",
  ],
  github: "https://github.com/akhubdev/CivicAI",
},
  ],
};
