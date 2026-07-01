/**
 * STUFAPS program catalogue.
 *
 * Shape mirrors the eventual API response so swapping to a backend is just:
 *   const { programs } = usePage<{ programs: Program[] }>().props;
 * No component changes required.
 */

import type { LucideIcon } from 'lucide-react';
import { GraduationCap, Stethoscope, Sprout, TreePalm, Tractor, Star, HeartPulse, Users } from 'lucide-react';

export type FinancialBenefitRow = {
    scholarType: string;
    tsfLabel: string;
    stipend: string;
    bookAllowance: string;
    total: string;
    isTotal?: boolean;
    isSpanned?: boolean;
};

export type FinancialBenefitGroup = {
    institution?: string;
    tableTitle?: string;
    summary?: string[];
    columns?: string[];
    rows: FinancialBenefitRow[];
};

export type DetailedRow = {
    particulars: string;
    perSemester: string;
    perAY: string;
    isTotal?: boolean;
};

export type DetailedProgramGroup = {
    program: string;
    rows: DetailedRow[];
};

export type DetailedFinancialGroup = {
    institution: string;
    summary?: string[];
    programGroups: DetailedProgramGroup[];
};

export type FinancialBenefits = {
    groups?: FinancialBenefitGroup[];
    detailedGroups?: DetailedFinancialGroup[];
};

export type NationalCategory = {
    category: string;
    items: string[];
};

export type NestedItem = {
    text: string;
    subItems?: string[];
};

export type NestedSection = {
    title?: string;
    items: NestedItem[];
};

export type PriorityPrograms = {
    title?: string;
    subtitle?: string;
    note?: string;
    itemColumns?: number;
    national: NationalCategory[];
    regional?: string[];
};

export type Program = {
    id: string;
    acronym: string;
    name: string;
    tagline: string;
    description: string;
    eligibilityNote?: string;
    eligibility: string[];
    eligibilityNestedSection?: NestedSection;
    ineligibility?: string[];
    ineligibilityNote?: string;
    documentaryNote?: string;
    documentaryBoldSubLabel?: boolean;
    documentaryRequirements: string[];
    documentaryNestedSection?: NestedSection;
    documentaryNestedSections?: NestedSection[];
    otherRequirements?: string[];
    otherRequirementsNote?: string;
    otherRequirementsBoldLabel?: boolean;
    benefits?: string[];
    financialBenefits?: FinancialBenefits;
    priorityPrograms?: PriorityPrograms;
    application?: Application;
    icon: LucideIcon;
    accent: string;
};

export type Application = {
    deadline: string; // e.g. "July 31, 2026"
    url: string; // portal / bit.ly link
    email: string;
    phone: string;
};

export const programs: Program[] = [
    {
        id: 'cmsp',
        acronym: 'CMSP',
        name: 'CHED Merit Scholarship Program',
        tagline: 'For academically excellent Filipino students',
        description:
            'The CHED Merit Scholarship Program (CMSP) is a competitive scholarship initiative of the Commission on Higher Education (CHED) that aims to support academically talented and deserving Filipino students. This program is intended for incoming/current first-year college students who have demonstrated exceptional academic performance and potential for excellence in higher education. Specifically, the CMSP is open to student applicants who have achieved a minimum General Weighted Average (GWA) of 93% or its equivalent in their Grade 12 report card.',
        eligibility: [
            'Filipino citizen',
            'Graduate of a Senior High School in the Philippines with a minimum GWA of 93% or its equivalent',
            'Combined annual gross income of the parents or legal guardians should not exceed Five Hundred Thousand Pesos (PhP500,000.00)',
        ],
        ineligibility: [
            'Foreign students',
            'Applicants who are not incoming or current first-year undergraduate students',
            'Applicants who will or are enrolled in priority programs but not granted government recognition or certification by CHED',
            'Applicants who will or intend to enroll in a non-priority program',
            'Transferees and Shiftees with credited units as determined by admitting HEIs',
            'An existing recipient of any nationally government-funded scholarships or grants, including Tertiary Education Subsidy (TES) or Tulong Dunong Program (TDP). Grantees under the One-time Grants are exempted',
            'Applicants who has completed an undergraduate degree program or a second course taker',
            'Applicants who submitted tampered and/or falsified application documents, including documentary requirements',
        ],
        documentaryRequirements: [
            'Accomplished application form using Annex A',
            'Copy of Birth certificate issued by National Statistics Office (NSO) or Philippine Statistics Authority (PSA)',
            "Certified true copy of the Form 138 [Learner's Progress Report Card or School Form 9 (SF9)], duly signed by the registrar or an authorized representative of the senior high school attended",
            'The student applicants shall submit any one (1) of the following documents, whichever is applicable: Latest Income Tax Return (ITR) of parents or legal guardian; Certificate of Tax Exemption/Non-Filer issued by the Bureau of Internal Revenue (BIR); Certified true copy of latest contract or proof of income for children of Overseas Filipino Workers (OFW) and Seafarers; or Social Case Study Report issued by the City/Municipal Social Welfare and Development Office (C/MSWDO)',
        ],
        otherRequirements: [
            "Applicant's PWD ID issued by C/MSWDO or Certification of Disability issued by the Persons with Disability Affairs Office (PDAO)",
            "Solo Parent ID of applicant or his/her parent issued by C/MSWDO",
            "Applicant's Senior Citizen ID issued by C/MSWDO",
            'Certification issued by Department of Human Settlements and Urban Development (DHSUD) or C/MSWDO to Underprivileged and Homeless family',
            'Social Case Study Report issued by C/MSWDO covered under Magna Carta for the Poor and/or First-Generation Students',
            'Certification issued by the National Commission on Indigenous Peoples (NCIP) to the Indigenous People',
            'Notarized Certificate of Guardianship, issued by the legal guardian of the student applicant, if applicable',
        ],
        financialBenefits: {
            detailedGroups: [
                {
                    institution: 'State / Local Universities and Colleges (SUCs/LUCs)',
                    summary: [
                        'HALF SCHOLAR: ₱20,000 per semester · ₱40,000.00 per AY',
                        'FULL SCHOLAR: ₱40,000.00 per semester · ₱80,000.00 per AY',
                    ],
                    programGroups: [
                        {
                            program: 'Full-SSP',
                            rows: [
                                { particulars: 'TOSF', perSemester: 'Free Higher Education (FHE)', perAY: 'Free Higher Education (FHE)' },
                                { particulars: 'Stipend (₱7,000.00 per month × 5 months per semester)', perSemester: '₱35,000.00', perAY: '₱70,000.00' },
                                { particulars: 'Book/Connectivity Allowance (₱5,000.00 per semester)', perSemester: '₱5,000.00', perAY: '₱10,000.00' },
                                { particulars: 'Total', perSemester: '₱40,000.00', perAY: '₱80,000.00', isTotal: true },
                            ],
                        },
                        {
                            program: 'Half-SSP',
                            rows: [
                                { particulars: 'TOSF', perSemester: 'FHE', perAY: 'FHE' },
                                { particulars: 'Stipend (₱3,500.00 per month × 5 months per semester)', perSemester: '₱17,500.00', perAY: '₱35,000.00' },
                                { particulars: 'Book/Connectivity Allowance (₱2,500.00 per semester)', perSemester: '₱2,500.00', perAY: '₱5,000.00' },
                                { particulars: 'Total', perSemester: '₱20,000.00', perAY: '₱40,000.00', isTotal: true },
                            ],
                        },
                    ],
                },
                {
                    institution: 'Private Higher Education Institutions (Private HEIs)',
                    summary: [
                        'HALF SCHOLAR: ₱30,000 per semester · ₱60,000.00 per AY',
                        'FULL SCHOLAR: ₱60,000.00 per semester · ₱120,000.00 per AY',
                    ],
                    programGroups: [
                        {
                            program: 'Full-PESFA',
                            rows: [
                                { particulars: 'TOSF', perSemester: '₱20,000.00', perAY: '₱40,000.00' },
                                { particulars: 'Stipend (₱7,000.00 per month × 5 months per semester)', perSemester: '₱35,000.00', perAY: '₱70,000.00' },
                                { particulars: 'Book/Connectivity Allowance (₱5,000.00 per semester)', perSemester: '₱5,000.00', perAY: '₱10,000.00' },
                                { particulars: 'Total', perSemester: '₱60,000.00', perAY: '₱120,000.00', isTotal: true },
                            ],
                        },
                        {
                            program: 'Half-PESFA',
                            rows: [
                                { particulars: 'TOSF', perSemester: '₱10,000.00', perAY: '₱20,000.00' },
                                { particulars: 'Stipend (₱3,500.00 per month × 5 months per semester)', perSemester: '₱17,500.00', perAY: '₱35,000.00' },
                                { particulars: 'Book/Connectivity Allowance (₱2,500.00 per semester)', perSemester: '₱2,500.00', perAY: '₱5,000.00' },
                                { particulars: 'Total', perSemester: '₱30,000.00', perAY: '₱60,000.00', isTotal: true },
                            ],
                        },
                    ],
                },
            ],
        },
        priorityPrograms: {
            subtitle: 'National Priority Programs — CMO No. 7 Series of 2023',
            national: [
                { category: '1. Science and Mathematics Education', items: ['Applied Physics/Physics', 'Applied Mathematics/Mathematics', 'Applied Statistics/Statistics', 'Biochemistry', 'Biology', 'Botany', 'Chemistry', 'Environmental Science', 'Geology', 'Human Biology', 'Marine Biology', 'Marine Science', 'Meteorology', 'Molecular Biology and Biotechnology', 'Volcano and Seismology Related Fields'] },
                { category: '2. Information Technology', items: ['Computer Science', 'Cyber Security', 'Entertainment and Multimedia Computing/Game Development and Animation', 'Information Technology', 'Library and Information Science'] },
                { category: '3. Engineering and Technology', items: ['Agricultural and Biosystems Engineering', 'Ceramic Engineering', 'Chemical Engineering', 'Civil Engineering', 'Computer Engineering', 'Electrical Engineering', 'Electronics Engineering/Electronics and Communications Engineering', 'Food Engineering', 'Geodetic Engineering', 'Industrial Engineering', 'Manufacturing/Production Engineering', 'Materials Engineering', 'Mechanical Engineering', 'Mechatronics Engineering', 'Metallurgical Engineering', 'Mining Engineering', 'Petroleum Engineering', 'Robotics Engineering', 'Sanitary Engineering', 'Structural Engineering', 'Aircraft Maintenance Technology', 'Aviation Related Programs', 'Engineering Technology', 'Industrial Technology', 'Mechatronics Engineering Technology'] },
                { category: '4. Architecture and Related Programs', items: ['Architecture', 'Fine Arts', 'Interior Design', 'Landscape Architecture', 'Environmental Planning'] },
                { category: '5. Business and Management', items: ['Accountancy', 'Business Analytics (straight or major)', 'Hospitality Management/Hotel and Restaurant Management', 'Tourism Management/Tourism'] },
                { category: '6. Health Profession Education', items: ['Doctor of Dental Medicine', 'Doctor of Optometry', 'Medical Technology/Medical Laboratory Science', 'Midwifery', 'Pharmacy', 'Physical Therapy', 'Public Health', 'Occupational Therapy', 'Nursing', 'Nutrition and Dietetics', 'Respiratory Therapy', 'Radiologic Technology', 'Speech Language Pathology'] },
                { category: '7. Maritime Education', items: ['Naval Architecture and Marine Engineering'] },
                { category: '8. Social Sciences', items: ['Community Development', 'Human Services (Guidance and Counselling)', 'Indigenous Peoples Studies/Education', 'Peace Studies/Education', 'Psychology', 'Social Work'] },
                { category: '9. Teacher Education', items: ['Secondary Education Majors in Science and Mathematics', 'Culture and Arts', 'Early Childhood Education', 'Special Needs Education', 'Sports and Exercise Science'] },
                { category: '10. Multi and Interdisciplinary Cluster', items: ['Agribusiness', 'Agro-Forestry', 'Data Science and Analytics', 'Disaster Risk Management', 'Climate Change', 'Renewable/Sustainable Energy'] },
            ],
            regional: [
                'Bachelor of Science in Criminology',
                'Bachelor of Science in Agriculture',
                'Bachelor of Science in Fisheries',
                'Bachelor of Arts in Islamic Education',
                'Bachelor of Elementary Education',
            ],
        },
        application: {
            deadline: 'July 31, 2026',
            url: 'https://bit.ly/2026CMSPApplicationPortal',
            email: 'stufaps12@ched.gov.ph',
            phone: '0909 711 1264',
        },
        icon: GraduationCap,
        accent: 'from-sky-500 to-blue-600',
    },
    {
        id: 'bpmsp',
        acronym: 'BPMSP',
        name: 'Bagong Pilipinas Merit Scholarship Program',
        tagline: 'A flagship merit-based program under Bagong Pilipinas',
        description:
            'The Bagong Pilipinas Merit Scholarship Program is a government initiative grounded in the Higher Education Act of 1994 and TESDA Act of 1994, and aligned with the directive of President Ferdinand R. Marcos, Jr., to support academically outstanding Filipino students. Implemented by CHED, DepEd, and TESDA, the program provides merit-based financial assistance to those pursuing priority degree programs and TVET courses that address critical workforce needs and hard-to-fill occupations. Funded under the General Appropriations Act for Fiscal Year 2026, it aims to promote equitable access to quality education, develop a highly skilled workforce, and contribute to national development through coordinated guidelines among the implementing agencies. It is a merit-based initiative designed by CHED, DepEd, and TESDA for outstanding Filipino students pursuing priority degrees or TVET diploma programs.',
        eligibility: [
            "Open to Filipino SHS graduates with parents' combined annual gross income not exceeding PhP 2,000,000",
            'Higher Education Track: Top 5 of graduating class or with a minimum GWA of 95%',
            'TVET Diploma Track: Minimum GWA of 90%',
            'Must render mandatory service in the Philippines after graduation',
        ],
        ineligibilityNote: 'An applicant shall be disqualified from the BPMSP under the following conditions:',
        ineligibility: [
            'A foreign student applicant or applicant with dual citizenship',
            'Applicant is an existing recipient of any nationally government-funded scholarships or grants',
            'Failed to submit complete documentary requirements within stipulated deadline',
            'Applicants who submit incomplete, falsified, and/or tampered documentary requirements shall be disqualified',
            'Applicant who has already undertaken or earned undergraduate units or completed an undergraduate degree',
            'Applicant who will repeat or re-enter the first year of college',
            'Applicant is a transferee or shiftee with credited units as determined by admitting HEIs (Higher Education Institutions)',
            'Applicant with a pending case or a record of disciplinary action in school or workplace',
        ],
        documentaryNote: 'Applicants must submit the following documents to the BPMSP portal or designated regional offices:',
        documentaryRequirements: [
            "Proof of Citizenship: A copy of the applicant's PSA Birth Certificate",
            'Academic Records — For Higher Education: Certified copy of the Grade 12 Report Card (SF9) and a certificate from the School Head confirming the student is in the Top 5 of the graduating class',
            'Academic Records — For TVET: Certified copy of the Grade 12 Report Card showing a GWA of at least 90%',
            'Proof of Income: Latest Income Tax Return (ITR) of parents/guardians or a Certificate of Tax Exemption from the BIR',
            "Proof of Residency: Barangay Certificate or any valid government ID showing the applicant's address",
            'Special Category Proof (if applicable): Certificates for IPs, Solo Parents, PWDs, or victims of calamities to qualify for equity priority',
        ],
        documentaryNestedSection: {
            title: 'Specific Eligibility Requirements for Higher Education Track',
            items: [
                {
                    text: 'Applicant must be officially enrolled in one of the identified priority programs offered by Philippine Higher Education Institutions that meet any of the following:',
                    subItems: [
                        'The degree program is recognized as a Center of Excellence (COE) or Center of Development (COD) based on the list of COE and COD from CHED',
                        'The degree program has a level III-IV program accreditation based on latest issuance from recognized accrediting agencies; or',
                        'The degree program is approved by the Commission En Banc',
                    ],
                },
                { text: 'Participating Local University and College must have the latest CHED-Institutional Recognition at the time of application' },
                { text: 'All participating HEIs must have signed Memorandum of Agreement with the CHED Regional Office as a delivering Higher Education Institution' },
            ],
        },
        otherRequirements: [
            "Applicant's PWD ID issued by C/MSWDO or Certification of Disability issued by the Persons with Disability Affairs Office (PDAO)",
            "Solo Parent ID of applicant or his/her parent issued by C/MSWDO",
            "Applicant's Senior Citizen ID issued by C/MSWDO",
            'Certification issued by Department of Human Settlements and Urban Development (DHSUD) or C/MSWDO to Underprivileged and Homeless family',
            'Social Case Study Report issued by C/MSWDO covered under Magna Carta for the Poor and/or First-Generation Students',
            'Certification issued by the National Commission on Indigenous Peoples (NCIP) to the Indigenous People',
            'Notarized Certificate of Guardianship, issued by the legal guardian of the student applicant, if applicable',
        ],
        priorityPrograms: {
            note: 'The total number of available scholarship slots shall be allocated across CHED-identified priority domains as follows:',
            national: [
                {
                    category: '',
                    items: [
                        'Agriculture and Fisheries',
                        'Creative Industries',
                        'Healthcare and Allied Programs',
                        'Engineering and Technology',
                        'Financial Services',
                        'Teacher Education',
                        'Digital Technology',
                        'Science and Mathematics',
                    ],
                },
            ],
        },
        financialBenefits: {
            groups: [
                {
                    columns: ['Component', 'Annual', 'Semestral', 'Trimester', 'Quarter Semester'],
                    rows: [
                        { scholarType: 'TOSF (Applicable to Private HEIs)', tsfLabel: '₱45,000.00', stipend: '₱22,500.00', bookAllowance: '₱15,000.00', total: '₱11,250.00' },
                        { scholarType: 'Stipend and Allowance', tsfLabel: '₱45,000.00', stipend: '₱22,500.00', bookAllowance: '₱15,000.00', total: '₱11,250.00' },
                    ],
                },
                {
                    tableTitle: 'TUITION AND OTHER SCHOOL FEES (TOSF)',
                    columns: ['', ''],
                    rows: [
                        { scholarType: 'Eligible Technical Vocational Institutions (TVIs)', tsfLabel: 'Maximum of ₱70,000/AY', stipend: '', bookAllowance: '', total: '' },
                    ],
                },
                {
                    tableTitle: 'Stipend',
                    columns: ['', ''],
                    rows: [
                        { scholarType: 'Scholars enrolled in Public and Private TVIs', tsfLabel: '₱40,000.00/AY', stipend: '', bookAllowance: '', total: '' },
                    ],
                },
                {
                    tableTitle: 'Book and Connectivity Allowance*',
                    columns: ['', ''],
                    rows: [
                        { scholarType: 'Scholars enrolled in Public and Private TVIs', tsfLabel: '₱10,000.00/AY', stipend: '', bookAllowance: '', total: '' },
                    ],
                },
            ],
        },
        application: {
            deadline: 'June 30, 2026',
            url: 'https://bpms.ched.gov.ph',
            email: 'bpmsp.ro12@ched.gov.ph',
            phone: '0968 618 4933',
        },
        icon: Star,
        accent: 'from-rose-500 to-red-600',
    },
    {
        id: 'sida-sgp',
        acronym: 'SIDA-SGP',
        name: 'Scholarship Grant for Children & Dependents of Sugarcane Industry Workers and Small Sugarcane Farmers',
        tagline: 'For dependents of sugarcane industry workers',
        description:
            'The SIDA-SGP is open to qualified and deserving children and dependents of sugarcane industry workers and small sugarcane farmers. This program shall cover both undergraduate and graduate students who will enroll or are currently enrolled in relevant fields of discipline in State Universities and Colleges (SUCs). This is to encourage interest in fields of discipline which are necessary for the development, sustainability and competitiveness of the Philippine sugarcane industry such as but not limited to agriculture; agricultural engineering and mechanics; chemical engineering and sugar technology; agricultural extension; chemistry; agricultural business and economics, accounting and statistics; biology, microbiology and biotechnology.',
        eligibility: [],
        eligibilityNestedSection: {
            title: 'Track-Specific Eligibility',
            items: [
                {
                    text: '1.1 Undergraduate program',
                    subItems: [
                        'Must be a Filipino Citizen;',
                        'High school graduate or with earned college academic units relevant to the identified degree program;',
                        'Must pass the entry level requirements of the identified SUC;',
                        "Duly certified by SRA as Sugarcane Industry Workers and Small Sugarcane Farmer's children and dependents; and",
                        'Must have a combined annual gross income of parent/guardian not to exceed Php400,000.00.',
                    ],
                },
                {
                    text: '1.2 Graduate program',
                    subItems: [
                        'Must be a Filipino Citizen;',
                        'With related undergraduate degree program and must pass the entry level requirements of identified SUC for master and doctoral degree programs;',
                        "Duly certified by SRA as Sugarcane Industry Workers and Small Sugarcane Farmer's children and dependents; and",
                        'Applicant and/or spouse must have a combined annual gross income of not exceed PHP500,000.00.',
                    ],
                },
            ],
        },
        documentaryRequirements: [],
        documentaryNestedSections: [
            {
                title: '2.1.1 Undergraduate Program',
                items: [
                    { text: 'For graduating Senior High School students — duly certified true copy of grades for Grades 11 and 1st semester of Grade 12;' },
                    { text: 'For Lifelong Learners eligible for college — High School Report Card;' },
                    { text: 'For applicants with earned units in college — duly Certified Copy of Grades for the latest semester/term attended;' },
                    {
                        text: 'For other Applicants:',
                        subItems: [
                            'ALS — duly certified copy of ALS Accreditation and Equivalency Test Passer Certificate;',
                            'PEPT — duly certified copy of PEPT Certificate of Advancing to the next level.',
                        ],
                    },
                    { text: 'Certificate of Good Moral Character from the last school attended;' },
                    { text: 'Certificate from SRA as children and dependents of sugarcane industry workers and small sugarcane farmers;' },
                    { text: 'Notice of admission from the SUC;' },
                    {
                        text: 'Proof of Income — any one (1) of the following:',
                        subItems: [
                            'Latest Income Tax Return (ITR) of parents/guardians if employed;',
                            'Certificate of Tax Exemption from the Bureau of Internal Revenue (BIR);',
                            'Certificate of No Income from BIR;',
                            'Certificate of Indigence from their barangay;',
                            'Certificate/Case Study from Department of Social Welfare and Development (DSWD); or',
                            'For Children of OFW and Seafarers, a latest copy of contract or proof of income may be considered.',
                        ],
                    },
                ],
            },
            {
                title: '2.1.2 Graduate Program',
                items: [
                    { text: "Diploma and Transcript of Records (TOR) of baccalaureate/master's degree or approved thesis/dissertation proposal approved and endorsed by the Technical Working Group (TWG) for grant;" },
                    { text: 'Certificate of Good Moral Character from the last school attended;' },
                    { text: 'Certification from SRA as children and dependents of Sugarcane Industry Workers and Small Sugarcane Farmers;' },
                    { text: 'Notice of Admission from the SUCs; and' },
                    {
                        text: 'Proof of Income — any one (1) of the following:',
                        subItems: [
                            'Latest ITR;',
                            'Certificate of Tax Exemption from the BIR;',
                            'Certificate of No Income from BIR;',
                            'Certificate of Indigence from their barangay; or',
                            'Certificate/Case Study from DSWD.',
                        ],
                    },
                ],
            },
        ],
        otherRequirementsNote:
            'Aside from the requirements in 2.1.1 and 2.1.2, those student-applicants belonging to the following special group of persons shall submit certification and/or identification cards (IDs) issued by the appropriate offices or agencies:',
        otherRequirements: [
            'Underprivileged and Homeless Citizens under Republic Act (RA) No. 7279;',
            'Persons with Disability (PWDs) under RA No. 7277;',
            'Solo Parents and/or their Dependents under RA 8972;',
            'Senior Citizens under RA 9994; and',
            'Indigenous Peoples under RA 8371.',
        ],
        financialBenefits: {
            groups: [
                {
                    institution: '1. For Undergraduate Programs',
                    tableTitle: '1.1 Regular Allowances',
                    summary: ['₱55,000.00 PER SEMESTER · ₱110,000.00 PER AY'],
                    columns: ['Type', 'Unit Cost (PHP)', 'Total Cost per Academic Year (PHP)'],
                    rows: [
                        {
                            scholarType: 'a. Stipend (which includes subsistence, clothing, transportation allowance, educational tours, field trips, expenses for small projects and medical insurance)',
                            tsfLabel: '₱10,000.00/month × 10 months or ₱50,000.00/semester',
                            stipend: '₱100,000.00',
                            bookAllowance: '',
                            total: '',
                        },
                        {
                            scholarType: 'b. Book allowance and other learning materials',
                            tsfLabel: '₱5,000.00/semester',
                            stipend: '₱10,000.00',
                            bookAllowance: '',
                            total: '',
                        },
                        {
                            scholarType: 'Subtotal',
                            tsfLabel: '',
                            stipend: '₱110,000.00',
                            bookAllowance: '',
                            total: '',
                        },
                    ],
                },
                {
                    tableTitle: '1.2 Others',
                    columns: ['Type', 'Total Cost'],
                    rows: [
                        {
                            scholarType: 'a. Thesis and/or OJT allowance',
                            tsfLabel: '₱75,000.00',
                            stipend: '',
                            bookAllowance: '',
                            total: '',
                        },
                        {
                            scholarType: 'b. One-time attendance to local conference/fora (should be related to the undergraduate program and to be given during the junior or senior standing. The activity should not be on the same HEI where the beneficiary is enrolled.)',
                            tsfLabel: '₱15,000.00',
                            stipend: '',
                            bookAllowance: '',
                            total: '',
                        },
                    ],
                },
                {
                    institution: '2. For Graduate Programs',
                    tableTitle: '2.1 Regular Allowances',
                    summary: ['₱87,500.00 PER SEMESTER · ₱175,000.00 PER AY'],
                    columns: ['Type', 'Unit Cost (PHP)', 'Total Cost per Academic Year (PHP)'],
                    rows: [
                        {
                            scholarType: 'a. Tuition and Other School Fees',
                            tsfLabel: '₱30,000.00/semester',
                            stipend: '₱60,000.00',
                            bookAllowance: '',
                            total: '',
                        },
                        {
                            scholarType: 'b. Stipend (which includes subsistence, clothing, transportation allowance, educational tours, field trips, expenses for small projects and medical insurance)',
                            tsfLabel: '₱10,000.00/month × 10 months or ₱50,000.00/semester',
                            stipend: '₱100,000.00',
                            bookAllowance: '',
                            total: '',
                        },
                        {
                            scholarType: 'c. Book allowance and other learning materials',
                            tsfLabel: '₱7,500.00/semester',
                            stipend: '₱15,000.00',
                            bookAllowance: '',
                            total: '',
                        },
                        {
                            scholarType: 'Subtotal',
                            tsfLabel: '',
                            stipend: '₱175,000.00',
                            bookAllowance: '',
                            total: '',
                        },
                    ],
                },
                {
                    tableTitle: '2.2 Others',
                    columns: ['Type', 'Total Cost'],
                    rows: [
                        {
                            scholarType: 'One-time attendance to local conference/fora (should be related to the graduate program. The activity should not be on the same HEI where the beneficiary is enrolled.)',
                            tsfLabel: '₱15,000.00',
                            stipend: '',
                            bookAllowance: '',
                            total: '',
                        },
                        {
                            scholarType: 'Dissertation Allowance (Doctoral)',
                            tsfLabel: '₱100,000.00',
                            stipend: '',
                            bookAllowance: '',
                            total: '',
                        },
                        {
                            scholarType: 'Thesis Allowance (Masters)',
                            tsfLabel: '₱75,000.00',
                            stipend: '',
                            bookAllowance: '',
                            total: '',
                        },
                    ],
                },
            ],
        },
        priorityPrograms: {
            title: 'Priority Programs',
            national: [
                {
                    category: 'BS/MS/PhD in Agriculture',
                    items: [
                        'Plant Breeding/Genetics',
                        'Crop/Soil Science',
                        'Agronomy',
                        'Plant/Crop Physiology',
                        'Agricultural Biotechnology',
                        'Entomology',
                        'Agricultural Extension',
                    ],
                },
                {
                    category: 'BS/MS/PhD in Chemistry',
                    items: [
                        'Chemistry',
                        'Soil Chemistry',
                        'Agricultural Chemistry',
                    ],
                },
                {
                    category: 'BS/MS/PhD in Engineering',
                    items: [
                        'Chemical Engineering/Sugar Technology',
                        'Mechanical Engineering',
                        'Electrical Engineering',
                        'Civil Engineering',
                        'Agricultural Engineering',
                        'Industrial Engineering',
                    ],
                },
                {
                    category: 'Other Relevant Courses',
                    items: [
                        'BS Statistics',
                        'BS Agricultural Economics',
                        'BS Agricultural Business',
                        'BS Accounting Management',
                        'BS Financial Management',
                        'BS Accountancy',
                        'BS Biology/Microbiology & Biotechnology',
                    ],
                },
            ],
        },
        icon: Sprout,
        accent: 'from-emerald-500 to-teal-600',
    },
    {
        id: 'acef-giahep',
        acronym: 'ACEF-GIAHEP',
        name: 'Agricultural Competitiveness Enhancement Fund – Grants-in-Aid for Higher Education Program',
        tagline: 'Promoting agriculture & fisheries through education',
        description:
            'The ACEF-GIAHEP aims to promote the development of agriculture and fisheries by increasing the number of graduates in higher education who are trained in the scientific habit of thought, entrepreneurial skills and technical competencies in the areas of agriculture, forestry, fisheries, and veterinary medicine education. It is open to qualified and deserving undergraduate students who will enroll or are currently enrolled in any CHED recognized higher education institution in the areas of agriculture, forestry, fisheries, veterinary medicine education and related agricultural education programs.',
        eligibility: [
            'Filipino citizen',
            'Graduating high school students; High school graduates; or With earned college academic units relevant to the identified degree programs',
            'Will enroll or are currently enrolled in recognized programs of PHEIs or authorized programs of SUCs/LUCs in agriculture, forestry, fisheries, veterinary medicine education and related agricultural education programs',
            'Combined annual gross income of parents/guardians not to exceed Four Hundred Thousand Pesos (PhP400,000.00)',
            'Preferably dependent of registered farmers and/or fisherfolks in Registry System for Basic Sectors in Agriculture (RSBSA) and other registry systems',
            'Must not be a beneficiary of any government-funded student financial assistance program; and',
            'Must not be convicted of a crime involving moral turpitude',
        ],
        documentaryRequirements: [],
        documentaryNestedSection: {
            items: [
                { text: 'a. Certified true copy of Birth Certificate;' },
                {
                    text: 'b. Academic Requirement:',
                    subItems: [
                        '1. For senior high school graduates — Form 138;',
                        '2. For graduating senior high school students — duly certified true copy of grades for Grade 11 and 1st semester of Grade 12; and',
                        '3. For applicants with earned units in college — duly certified copy of grades for the latest semester/term attended;',
                    ],
                },
                {
                    text: 'c. Proof of income — ANY of the following:',
                    subItems: [
                        '1. Latest Income Tax Return (ITR) of parent/s or guardian/s if employed;',
                        '2. Certificate of Tax Exemption from the Bureau of Internal Revenue (BIR);',
                        '3. Certificate of No Income from BIR; or',
                        '4. Certificate/Case Study Report from City/Municipal Social Welfare and Development Office (C/MSWD).',
                    ],
                },
                { text: 'd. Proof that the student applicant belonged to special group/s (if applicable).' },
            ],
        },
        priorityPrograms: {
            title: 'Priority Programs',
            itemColumns: 2,
            national: [
                {
                    category: '',
                    items: [
                        'Bachelor of Science in Agriculture',
                        'Bachelor of Science in Forestry',
                        'Bachelor of Science in Agroforestry',
                        'Bachelor of Science in Fisheries',
                        'Bachelor of Science in Veterinary Technology',
                        'Doctor of Veterinary Medicine',
                        'Other Agricultural Related Courses',
                    ],
                },
            ],
        },
        financialBenefits: {
            groups: [
                {
                    institution: 'a) Private Higher Education Institutions (PHEIs)',
                    summary: [
                        '₱30,000.00 PER SEMESTER · ₱60,000.00 PER AY',
                        'Tuition and Other School Fees — ₱10,000.00',
                        'Stipend — ₱17,500.00',
                        'Book Allowance — ₱2,500.00',
                    ],
                    columns: ['Period', 'TOSF', 'Stipend', 'Book Allowance', 'Total'],
                    rows: [
                        { scholarType: 'Annual', tsfLabel: '₱20,000.00', stipend: '₱35,000.00', bookAllowance: '₱5,000.00', total: '₱60,000.00' },
                        { scholarType: 'Semestral', tsfLabel: '₱10,000.00', stipend: '₱17,500.00', bookAllowance: '₱2,500.00', total: '₱30,000.00' },
                    ],
                },
                {
                    institution: 'b) State / Local Universities and Colleges (SUCs/LUCs)',
                    summary: [
                        '₱20,000.00 PER SEMESTER · ₱40,000.00 PER AY',
                        'Tuition and Other School Fees — Free',
                        'Stipend — ₱17,500.00',
                        'Book Allowance — ₱2,500.00',
                    ],
                    columns: ['Period', 'TOSF', 'Stipend', 'Book Allowance', 'Total'],
                    rows: [
                        { scholarType: 'Annual', tsfLabel: 'FREE', stipend: '₱35,000.00', bookAllowance: '₱5,000.00', total: '₱40,000.00' },
                        { scholarType: 'Semestral', tsfLabel: 'FREE', stipend: '₱17,500.00', bookAllowance: '₱2,500.00', total: '₱20,000.00' },
                    ],
                },
            ],
        },
        icon: Tractor,
        accent: 'from-amber-500 to-orange-600',
    },
    {
        id: 'msrs',
        acronym: 'MSRS',
        name: 'Medical Scholarship and Return Service Program',
        tagline: 'Producing physicians for underserved communities',
        description:
            'The MSRS program aims to help deserving medical students pursue medical education and training in the field of health and medicine. This shall be accessible to qualified and deserving Filipino students who are willing to undertake the mandatory return service, preferably but not limited to those who are residing in municipality without government physicians, Geographically Isolated and Disadvantaged Areas (GIDA) or from the top twenty (20%) provinces and/or municipalities as identified by the PSA, calamity-prone and conflict areas, low-income class municipalities with poverty incidence; belonging to the ethnic group or indigenous population/communities as certified by respective local government units and the National Commission on Indigenous People (NCIP), dependents of community health volunteers, and those who combined annual family income of less than PhP450,000.00.',
        eligibility: [
            'Must be a Filipino citizen residing in the Philippines',
            'Must be a graduating student or a graduate of an appropriate undergraduate program identified as a prerequisite for a Doctor of Medicine degree, from any HEI duly recognized by the CHED, including a direct entrant to the Integrated Liberal Arts and Medicine (INTARMED) Program who satisfactorily completes the first two (2) years of the Program: Provided, that deserving incoming second year medical students and those in the higher year levels of the Doctor of Medicine Program shall also be covered under this Act, as long as they have complied with the academic requirements and retention policies of the school in the past terms preceding their scholarship application',
            'Must have passed the entrance examinations and complied with other related requirements for admission into a Doctor of Medicine degree in the SUC or PHEI where the scholar intends to enroll as well as the other requirements of the CHED and the DOH',
            'Must obtain a National Medical Admission Test (NMAT) score mandated by the CHED and required by the SUC or PHEI where the student intends to enroll in',
        ],
        documentaryRequirements: [],
        documentaryNestedSections: [
            {
                title: 'General',
                items: [
                    { text: 'Proof of Filipino citizenship such as any government-issued document showing proof of Filipino citizenship, including, but not limited, to certified true copy of birth certificate, PHILSYS ID;' },
                    { text: 'Certificate of Good Moral Character;' },
                    {
                        text: 'Additional requirements for priority groups (as applicable):',
                        subItems: [
                            'Certificate of Residency from Barangay;',
                            'Certification as members of indigenous people or minority group/national commission on indigenous people (NCIP) certificate; and',
                            'Tax exemption/Tax Declaration (from BIR) or social case study duly signed by a registered social worker where the applicant resides.',
                        ],
                    },
                ],
            },
            {
                title: 'Specific',
                items: [
                    { text: 'Certification of Acceptance from the SUCs and PHEIs (i.e. have passed the admission requirements, standards and policies of chosen HEI as well as the other requirements of the CHED); and' },
                    { text: 'Affidavit of No Existing Scholarship Grant (i.e. have not availed of any other scholarship grants or with return service obligation at the time of application or at the same period).' },
                ],
            },
        ],
        financialBenefits: {
            groups: [
                {
                    tableTitle: 'A. Tuition and Other School Fees (TOSF)',
                    columns: ['Type of HEI', 'TF per Semester', 'Other School Fees per Semester'],
                    rows: [
                        { scholarType: 'SUC', tsfLabel: 'Actual', stipend: 'Actual', bookAllowance: '', total: '' },
                        { scholarType: 'Private', tsfLabel: 'Actual TOSFs but not exceeding ₱100,000.00', stipend: '', bookAllowance: '', total: '', isSpanned: true },
                    ],
                },
                {
                    tableTitle: 'B. Subsidy and Other Allowances (1 to 4 Year Levels)',
                    columns: ['Allowances', 'Per Semester', 'Per AY'],
                    rows: [
                        { scholarType: 'Book Allowance', tsfLabel: '13,000', stipend: '26,000', bookAllowance: '', total: '' },
                        { scholarType: 'Clothing/Uniform Allowance', tsfLabel: '3,500', stipend: '7,000', bookAllowance: '', total: '' },
                        { scholarType: 'Miscellaneous Allowance (to include Connectivity Allowance)', tsfLabel: '6,000', stipend: '12,000', bookAllowance: '', total: '' },
                        { scholarType: 'Living Subsidy (5,000 × 6 mos.)', tsfLabel: '30,000', stipend: '60,000', bookAllowance: '', total: '' },
                        { scholarType: 'Lodging Allowance (5,000 × 6 mos.)', tsfLabel: '30,000', stipend: '60,000', bookAllowance: '', total: '' },
                        { scholarType: 'Transportation Allowance (1,000 × 6 mos.)', tsfLabel: '6,000', stipend: '12,000', bookAllowance: '', total: '' },
                        { scholarType: 'Total', tsfLabel: '₱88,500', stipend: '₱177,000', bookAllowance: '', total: '', isTotal: true },
                    ],
                },
                {
                    tableTitle: 'C. Subsidy and Allowances (5th Year Internship)',
                    columns: ['Allowances', 'Per Semester', 'Per AY'],
                    rows: [
                        { scholarType: 'Living Subsidy (5,000 × 6 mos.)', tsfLabel: '30,000', stipend: '60,000', bookAllowance: '', total: '' },
                        { scholarType: 'Lodging Allowance (5,000 × 6 mos.)', tsfLabel: '30,000', stipend: '60,000', bookAllowance: '', total: '' },
                        { scholarType: 'Transportation Allowance (1,000 × 6 mos.)', tsfLabel: '6,000', stipend: '12,000', bookAllowance: '', total: '' },
                        { scholarType: 'One-time Board/Licensure Examination Review and Application Fees', tsfLabel: '', stipend: '16,000', bookAllowance: '', total: '' },
                        { scholarType: 'Total', tsfLabel: '₱66,000', stipend: '₱148,000', bookAllowance: '', total: '', isTotal: true },
                    ],
                },
                {
                    tableTitle: 'D. Insurance',
                    columns: ['Coverage'],
                    rows: [
                        { scholarType: 'Annual Medical Insurance/Philhealth (amount prescribed by the Philippine Health Insurance Corporation (PHIC))', tsfLabel: '', stipend: '', bookAllowance: '', total: '' },
                        { scholarType: 'GSIS Accident Insurance (amount prescribed by Government Service Insurance System (GSIS))', tsfLabel: '', stipend: '', bookAllowance: '', total: '' },
                    ],
                },
            ],
        },
        application: {
            deadline: 'July 13, 2026',
            url: 'https://bit.ly/MSRS-Apply',
            email: 'stufaps12@ched.gov.ph',
            phone: '090 9711 1264',
        },
        icon: Stethoscope,
        accent: 'from-fuchsia-500 to-pink-600',
    },
    {
        id: 'coscho',
        acronym: 'COSCHO',
        name: 'Scholarship Program for Coconut Farmers and their Families',
        tagline: 'Empowering coconut farming communities through education',
        description:
            'The scholarship program aims to raise social equity of coconut farmers and ultimately alleviate poverty through the provision of quality education to coconut farmers and/or their dependents. The scholarship program is ultimately expected to improve agricultural productivity and modernization in the coconut industry by raising the knowledge of coconut farmers and/or their dependents on scientific advances in agricultural technology and other related fields and motivate the younger generation to be engaged in the agriculture sector.',
        eligibility: [
            'Filipino citizen',
            'Graduating high school student/high school graduate with a general weighted average grade (GWA) of 80% or its equivalent; or college student with earned academic units relevant to the degree programs identified by PCA with a GWA of 80% the previous semester or its equivalent',
            'Pass the entry level requirements of identified State Universities and Colleges (SUCs)',
            'Not be a recipient of any government-funded financial assistance program',
            'Duly registered coconut farmer in the NCFRS or his/her dependent',
            'Must have a combined annual gross income of parents not exceeding ₱300,000.00',
        ],
        documentaryRequirements: [],
        documentaryNestedSection: {
            items: [
                { text: '1. Birth Certificate issued by the Philippine Statistics Authority;' },
                {
                    text: '2. Academic:',
                    subItems: [
                        'For senior high school students - duly certified true copy of grades for Grade 11 and first semester for Grade 12',
                        'For senior high school graduates - Form 138 or SF 9',
                        'For ALS graduate - duly certified true copy of grades for Grade 12',
                        'For applicants with earned units or currently enrolled in college - duly Certified Copy of Grades for the latest semester/term attended',
                    ],
                },
                { text: '3. PCA Certification;' },
                { text: '4. Certificate of Good Moral Character from the last school attended (applicable for incoming first year college applicants or transferees);' },
                { text: '5. Notice of admission from the HEIs (for incoming first year college students or transferees);' },
                {
                    text: '6. Proof of Income - ANY of the following:',
                    subItems: [
                        'Latest Income Tax Return (ITR) of applicant and/spouse/parents/guardians if employed;',
                        'Certificate of Tax Exemption from the Bureau of Internal Revenue (BIR);',
                        'Certificate of No Income from BIR;',
                        'Certificate of Low Income from the BIR indicating the actual amount of income; or',
                        'Certificate/Case Study from City/Municipal Social Welfare and Development Office (C/MSWDO).',
                    ],
                },
                { text: '7. Original/certified true copy of certification issued by the HEIs certifying that the applicant is currently enrolled in CoScho identified priority programs and not enjoying any national government-funded scholarship program (for currently enrolled college student applicants—2nd, 3rd and 4th year levels)' },
            ],
        },
        otherRequirementsNote: 'Additional five (5) points to applicants belonging to special equity group: (Whichever is applicable to the applicant)',
        otherRequirements: [
            'Original/certified true copy of the certification issued by the National Commission of Indigenous Peoples (NCIP) attesting that the student applicant belongs to indigenous group/s;',
            'Original/certified true copy of the certification issued by the C/MSWDO attesting that parents/guardians and siblings of the student applicant had never attended college/university;',
            "Certified true copy of the PWD ID issued by LGU's Person with Disability Affairs Office (PDAO) or City/Municipal Social Welfare and Development Office; or",
            'For Solo Parent or Son/Daughter of a Solo Parent - Certified true copy of the Solo Parent issued by the C/MSWDO.',
        ],
        financialBenefits: {
            groups: [
                {
                    tableTitle: '12.1. Regular Allowances',
                    columns: ['Type', 'Total Cost Per Semestral', 'Total Cost Per Academic Year'],
                    rows: [
                        {
                            scholarType: 'a. Stipend (which includes food, educational tours, transportation, projects, medical insurance, internet use, communication)',
                            tsfLabel: '35,000.00',
                            stipend: '70,000.00',
                            bookAllowance: '',
                            total: '',
                        },
                        {
                            scholarType: 'b. Book allowance and other learning materials',
                            tsfLabel: '5,000.00',
                            stipend: '10,000.00',
                            bookAllowance: '',
                            total: '',
                        },
                        { scholarType: 'Total', tsfLabel: '', stipend: '₱80,000.00', bookAllowance: '', total: '', isTotal: true },
                    ],
                },
                {
                    tableTitle: '12.2. Other Allowances',
                    columns: ['Type', 'Total Cost'],
                    rows: [
                        {
                            scholarType: 'a. Thesis and/or OJT Allowance',
                            tsfLabel: '75,000.00',
                            stipend: '',
                            bookAllowance: '',
                            total: '',
                        },
                        {
                            scholarType: 'b. One-time attendance in local conference/fora (should be related to the undergraduate program and to be given during the junior or senior standing. The activity should not be on the same HEI where the beneficiary is enrolled)',
                            tsfLabel: '10,000.00',
                            stipend: '',
                            bookAllowance: '',
                            total: '',
                        },
                        {
                            scholarType: 'c. One-time financial assistance for the purchase of a laptop (to be given during the first year of scholarship grant)',
                            tsfLabel: '30,000.00',
                            stipend: '',
                            bookAllowance: '',
                            total: '',
                        },
                        { scholarType: 'Total', tsfLabel: '₱115,000.00', stipend: '', bookAllowance: '', total: '', isTotal: true },
                    ],
                },
            ],
        },
        priorityPrograms: {
            title: 'Priority Programs',
            national: [
                {
                    category: '',
                    items: [
                        'Bachelor of Science in Agriculture',
                        'Bachelor of Science in Agricultural Biotechnology',
                        'Bachelor of Science in Agricultural and Biosystems Engineering',
                        'Bachelor of Science in Agribusiness / Agribusiness Management',
                        'Bachelor of Science in Agricultural Economics',
                        'Bachelor of Science in Agricultural Chemistry',
                        'Bachelor of Science in Agricultural Entrepreneurship',
                        'Bachelor of Science in Agricultural Engineering',
                        'Bachelor of Science in Agricultural Extension Education',
                        'Bachelor of Science in Agricultural Technology',
                        'Bachelor of Science in Agri-fisheries',
                        'Bachelor of Science in Agroforestry',
                        'Bachelor of Science in Architectural Engineering',
                        'Bachelor of Science in Biology',
                        'Bachelor of Science in Biochemistry',
                        'Bachelor of Science in Business Administration',
                        'Bachelor of Science in Dairy Technology',
                        'Bachelor of Science in Development Management',
                        'Bachelor of Science in Development Communication',
                    ],
                },
                {
                    category: '',
                    items: [
                        'Bachelor of Science in Economics / Bachelor of Arts in Economics',
                        'Bachelor of Science in Environmental Engineering',
                        'Bachelor of Science in Environmental Science',
                        'Bachelor of Science in Fisheries',
                        'Bachelor of Science in Food Engineering',
                        'Bachelor of Science in Food Science and Technology',
                        'Bachelor of Science in Forestry',
                        'Bachelor of Science in Manufacturing Engineering / Manufacturing Technology Engineering',
                        'Bachelor of Science in Marine Biology',
                        'Bachelor of Science in Microbiology',
                        'Bachelor of Science in Political Science',
                        'Bachelor of Science in Physics',
                        'Bachelor of Science in Psychology',
                        'Bachelor of Science in Public Administration',
                        'Bachelor of Science in Rural Development',
                        'Bachelor of Science in Social Work',
                        'Bachelor of Science in Statistics',
                        'Bachelor of Science in Tourism',
                        'Bachelor of Science in Tourism Management / Agri Eco-Tourism Management',
                    ],
                },
            ],
        },
        icon: TreePalm,
        accent: 'from-lime-500 to-green-600',
    },
    {
        id: 'ahead',
        acronym: 'AHEAD',
        name: 'Allied Health Experiential Assistance for Deserving Students Grant',
        tagline: 'One-time RLE financial assistance for allied health students',
        description:
            'The AHEAD Grant is offered to qualified students to provide a one-time fixed financial assistance of Twenty-Five Thousand Pesos (PhP 25,000.00) to help cover eligible expenses incurred in completing their Related Learning Experience (RLE) requirements and activities.',
        eligibility: [],
        eligibilityNestedSection: {
            items: [
                { text: '1. Must be a Filipino citizen;' },
                {
                    text: '2. Will be enrolled in any of the following CHED-recognized Bachelor\'s degree programs this First Semester, AY 2026-2027, offered by CHED-recognized institutions:',
                    subItems: [
                        'a. Bachelor of Science in Nursing',
                        'b. Bachelor of Science in Medical Technology/Medical Laboratory Science',
                        'c. Bachelor of Science in Midwifery',
                        'd. Bachelor of Science in Nutrition and Dietetics',
                        'e. Bachelor of Science in Occupational Therapy',
                        'f. Bachelor of Science in Public Health',
                        'g. Bachelor of Science in Physical Therapy',
                        'h. Bachelor of Science in Respiratory Therapy',
                        'i. Bachelor of Science in Radiologic Technology',
                        'j. Bachelor of Science in Pharmacy k. Bachelor of Science in Speech Language Pathology Doctor of Dental Medicine (DMD)',
                        'm. Doctor of Optometry (DO)',
                        'n. Doctor of Veterinary Medicine (DVM)',
                    ],
                },
                { text: '3. Will be enrolled in courses with an RLE component during the applicable semester; and' },
                { text: '4. Must have a combined annual gross family income of not more than One Million Two Hundred Thousand Pesos (PhP 1,200,000.00), as defined in Section II of this CMO;' },
            ],
        },
        documentaryNote: 'Submit the applicable documents based on your family circumstance:',
        documentaryRequirements: [],
        documentaryNestedSections: [
            {
                title: 'Single surviving parent (death of one parent)',
                items: [
                    { text: 'ITR or Certificate of Tax Exemption of the surviving parent from the BIR' },
                    { text: 'PSA-issued Death Certificate of the deceased parent' },
                ],
            },
            {
                title: 'Parent is an Overseas Filipino Worker (OFW)',
                items: [
                    { text: 'ITR or Certificate of Tax Exemption of the parent in the Philippines' },
                    { text: 'Proof of OFW status (Overseas Employment Certificate, OFW ID, or overseas employment contract)' },
                ],
            },
            {
                title: 'Parent abandoned the family or their whereabouts are unknown',
                items: [
                    { text: 'ITR or Certificate of Tax Exemption of the present parent or legal guardian' },
                    { text: 'Sworn Affidavit attesting to abandonment or absence' },
                    { text: 'Barangay Certification confirming the family circumstance' },
                ],
            },
            {
                title: 'Applicant under legal guardianship',
                items: [
                    { text: 'ITR or Certificate of Tax Exemption of the legal guardian' },
                    { text: 'Court Order or DSWD Certification of Legal Guardianship' },
                    { text: 'PSA Death Certificates or proof of parental incapacity, as applicable' },
                ],
            },
        ],
        otherRequirementsNote: 'Submit the applicable document if you belong to any of the following special equity groups:',
        otherRequirementsBoldLabel: true,
        otherRequirements: [
            'Persons with Disabilities (PWDs): Valid PWD Identification Card or a medical certificate of disability issued by the Local Government Unit — Persons with Disability Affairs Office (LGU-PDAO) or by a physician accredited by the Department of Health (DOH)',
            'Solo Parents or their Dependents: Valid Solo Parent Identification Card or certification issued by the Local Government Unit (LGU), Department of Social Welfare and Development (DSWD), or the appropriate Office for Solo Parents',
            'Senior Citizens: Valid Identification Card issued by the Office of the Senior Citizens Affairs (OSCA)',
            'Members of Indigenous Peoples Groups: Certificate of tribal membership issued by the recognized tribal authority or certification issued by the National Commission on Indigenous Peoples (NCIP)',
            'Persons Living in Poverty: Listahanan certification, Pantawid Pamilyang Pilipino Program (4Ps) Identification Card, or certification issued by the DSWD',
        ],
        application: {
            deadline: 'July 7, 2026',
            url: 'https://ahead.ched.gov.ph',
            email: 'ahead.ro12@ched.gov.ph',
            phone: '0968 618 4933',
        },
        icon: HeartPulse,
        accent: 'from-violet-500 to-purple-600',
    },
    {
        id: 'spegs',
        acronym: 'SPSEGs',
        name: 'The Scholarship Program for Special Equity Groups',
        tagline: 'Empowering Special Equity Groups through higher education',
        description:
            'This program is offered to support students from Special Eligibility Groups (SEGs) by expanding access to higher education through merit-based and empowerment-driven financial assistance, promoting student retention and successful completion of studies, and contributing to social inclusion, poverty reduction, social protection, and active participation in national development through a fair, transparent, and inclusive selection process.',
        eligibility: [],
        eligibilityNestedSection: {
            items: [
                { text: 'Underprivileged and Homeless Citizens, as defined under RA No. 7279 or the Urban Development and Housing Act, as amended;' },
                { text: 'Poor, as defined under RA No. 11291 or the Magna Carta of the Poor;' },
                { text: 'Persons with Disabilities (PWDs), pursuant to RA No. 7277 or the Magna Carta for Persons with Disabilities, as amended;' },
                { text: "Solo Parents and their Children, as defined under RA No. 8972 or the Solo Parents' Welfare Act, as amended;" },
                { text: 'Senior Citizens, as defined under RA No. 9994 or the Expanded Senior Citizens Act; and' },
                { text: "Indigenous Cultural Communities/Indigenous Peoples (ICCs/IPs), as defined under RA No. 8371 or the Indigenous Peoples' Rights Act." },
                { text: 'Filipino citizen residing in the Philippines;' },
                { text: 'A duly certified member of any SEG, as enumerated under Article III;' },
                { text: 'Graduate of a Senior High school (SHS) in the Philippines with a minimum general average of at least 85% or its equivalent;' },
                { text: 'Must be admitted or enrolled in any CHED-identified priority undergraduate programs with valid GR or COPC, offered by PHEIs or SUCs duly recognized by the CHED, or LUCs with IR; and' },
                { text: "The applicant's individual income, if employed, or the combined annual gross income of the parent/s or legal guardian/s, in the case of children or dependents, must not exceed Two Million Pesos (Php 2,000,000.00)." },
            ],
        },
        documentaryBoldSubLabel: true,
        documentaryRequirements: [],
        documentaryNestedSection: {
            items: [
                { text: 'Accomplished Application Form (Annex A);' },
                { text: 'Photocopy of Birth certificate issued by the by the National Statistics Office (NSO) or the Philippine Statistics Authority (PSA);' },
                {
                    text: 'Certification and/or Identification Card confirming membership in any SEG enumerated under Article III, as follows:',
                    subItems: [
                        'For Underprivileged and Homeless Citizens — Applicant\'s certification issued by the Local Housing Office, Urban Poor Affairs Office, the Department of Human Settlements and Urban Development (DHSUD), or the City/Municipal Social Welfare and Development Office (C/MSWDO), or proof of inclusion in the Community-Based Monitoring System (CBMS), as certified by the C/MSWDO;',
                        'For Individuals covered under the Magna Carta for the Poor — Applicant\'s Social Case Study Report or proof of inclusion in the CBMS, as certified by the C/MSWDO;',
                        'For PWDs — Applicant\'s valid PWD identification card (ID) issued by the Persons with Disability Affairs Office (PDAO) or certification issued by the C/MSWDO;',
                        'For Solo Parents and their Children — Applicant\'s or his/her parent\'s valid solo Parent ID issued by the C/MSWDO;',
                        'For Senior Citizens — Applicant\'s Senior Citizen ID issued by the Office of the Senior Citizens Affair (OSCA); and',
                        'For IPS — Applicant\'s certification issued by the National Commission on Indigenous Peoples (NCIP).',
                    ],
                },
                { text: 'Certified true copy of Form 138 [Learner\'s Progress Report Card or School Form 9 (SF9)], duly signed by the registrar or an authorized representative of the SHS attended;' },
                {
                    text: 'Submit the appropriate and latest proof of income applicable to the academic year being applied for, as available, through any one (1) of the following documents:',
                    subItems: [
                        'Income Tax Return [Bureau of Internal Revenue (BIR) Form No. 1701/1701A] or Certificate of Compensation Payment/Tax Withheld (BIR Form No. 2316) indicating the annual gross income of the applicant, if employed, or of the parent/s or legal guardian/s;',
                        'Certificate of Tax Exemption/Non-Filer issued by the Bureau of Internal Revenue (BIR);',
                        'Certified true copy of contract or proof of income for children of Overseas Filipino Workers (OFW) and Seafarers; or',
                        'Social Case Study Report issued by the C/MSWDO.',
                    ],
                },
                { text: 'Notarized Certificate of Guardianship, issued by the legal/authorized guardian of the student applicant, if applicable.' },
            ],
        },
        application: {
            deadline: 'July 31, 2026',
            url: 'https://bit.ly/2026EASEApplicationPortal',
            email: 'bpmsp.ro12@ched.gov.ph',
            phone: '0968 618 4933',
        },
        icon: Users,
        accent: 'from-indigo-500 to-indigo-700',
    },
];

/** Programs with a live application portal — shown in the Apply Now modal. */
export const openPrograms = programs.filter((p) => p.application);

export const generalRequirements = {
    documentary: [
        "Proof of Citizenship: A copy of the applicant's PSA Birth Certificate",
        'Academic Records',
        'For Higher Education: Certified true copy of the Grade 12 Report Card (SF9) and a certificate from the school head confirming the student is in the Top 5 of the graduating class',
        'For TVET: Certified true copy of the Grade 12 Report Card showing a GWA of at least 90%',
        'Proof of Income: Latest Income Tax Return (ITR) of parents/guardians or a Certificate of Tax Exemption from the BIR',
        "Proof of Residency: Barangay Certificate or any valid government ID showing the applicant's address",
        'Special Category Proof (if applicable): Certificates for IPs, Solo Parents, PWDs, or victims of calamities to qualify for equity priority',
    ],
    general: [
        'Proof of Filipino citizenship such as any government-issued document showing proof of Filipino citizenship, including, but not limited to, certified true copy of birth certificate, PHILSYS ID',
        'Certificate of Good Moral Character',
        'Additional requirements for priority groups (as applicable): Certificate of Residency from Barangay; Certification as members of indigenous people or minority group / national commission on indigenous people (NCIP) certificate; Tax exemption / Tax Declaration (from BIR) or social case study duly signed by a registered social worker where the applicant resides',
    ],
    specific: [
        'Certification of Acceptance from the SUCs and PHEIs (i.e. have passed the admission requirements, standards and policies of chosen HEI as well as the other requirements of the CHED)',
        'Affidavit of No Existing Scholarship Grant (i.e. have not availed of any other scholarship grants or with return service obligation at the time of application or at the same period)',
    ],
};
