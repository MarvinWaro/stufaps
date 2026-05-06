/**
 * STUFAPS program catalogue.
 *
 * Shape mirrors the eventual API response so swapping to a backend is just:
 *   const { programs } = usePage<{ programs: Program[] }>().props;
 * No component changes required.
 */

import type { LucideIcon } from 'lucide-react';
import { GraduationCap, Stethoscope, Sprout, TreePalm, Tractor, Star } from 'lucide-react';

export type FinancialBenefitRow = {
    scholarType: string;
    tsfLabel: string;
    stipend: string;
    bookAllowance: string;
    total: string;
};

export type FinancialBenefitGroup = {
    institution: string;
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

export type PriorityPrograms = {
    subtitle?: string;
    national: NationalCategory[];
    regional?: string[];
};

export type Program = {
    id: string;
    acronym: string;
    name: string;
    tagline: string;
    description: string;
    eligibility: string[];
    ineligibility?: string[];
    documentaryRequirements: string[];
    otherRequirements?: string[];
    benefits?: string[];
    financialBenefits?: FinancialBenefits;
    priorityPrograms?: PriorityPrograms;
    icon: LucideIcon;
    accent: string;
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
        icon: GraduationCap,
        accent: 'from-sky-500 to-blue-600',
    },
    {
        id: 'bpmsp',
        acronym: 'BPMSP',
        name: 'Bagong Pilipinas Merit Scholarship Program',
        tagline: 'A flagship merit-based program under Bagong Pilipinas',
        description:
            'The Bagong Pilipinas Merit Scholarship Program is a government initiative grounded in the Higher Education Act of 1994 and TESDA Act of 1994, and aligned with the directive of President Ferdinand R. Marcos, Jr., to support academically outstanding Filipino students. Implemented by CHED, DepEd, and TESDA, the program provides merit-based financial assistance to those pursuing priority degree programs and TVET courses that address critical workforce needs and hard-to-fill occupations. Funded under the General Appropriations Act for Fiscal Year 2026, it aims to promote equitable access to quality education, develop a highly skilled workforce, and contribute to national development through coordinated guidelines among the implementing agencies.',
        eligibility: [
            "Open to Filipino SHS graduates with parents' combined annual gross income not exceeding PhP 2,000,000",
            'Higher Education Track: Top 5 of graduating class or with a minimum GWA of 95%',
            'TVET Diploma Track: Minimum GWA of 90%',
            'Must render mandatory service in the Philippines after graduation',
        ],
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
        documentaryRequirements: [
            "Proof of Citizenship: A copy of the applicant's PSA Birth Certificate",
            'Academic Records — For Higher Education: Certified copy of the Grade 12 Report Card (SF9) and a certificate from the School Head confirming the student is in the Top 5 of the graduating class',
            'Academic Records — For TVET: Certified copy of the Grade 12 Report Card showing a GWA of at least 90%',
            'Proof of Income: Latest Income Tax Return (ITR) of parents/guardians or a Certificate of Tax Exemption from the BIR',
            "Proof of Residency: Barangay Certificate or any valid government ID showing the applicant's address",
            'Special Category Proof (if applicable): Certificates for IPs, Solo Parents, PWDs, or victims of calamities to qualify for equity priority',
            '(HE Track) Applicant must be officially enrolled in one of the identified priority programs offered by Philippine HEIs that meet any of the following: (a) recognized as a COE or COD based on the CHED list; (b) has a Level III–IV program accreditation from recognized accrediting agencies; or (c) approved by the Commission En Banc',
            '(HE Track) Participating Local University or College must have the latest CHED-Institutional Recognition at the time of application',
            '(HE Track) All participating HEIs must have signed a Memorandum of Agreement with the CHED Regional Office as a delivering Higher Education Institution',
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
        priorityPrograms: {
            subtitle: 'BPMSP Priority Domains',
            national: [
                { category: 'CHED-Identified Priority Domains', items: ['Agriculture and Fisheries', 'Creative Industries'] },
            ],
        },
        financialBenefits: {
            groups: [
                {
                    institution: 'Higher Education Track (SUCs, LUCs, and Private HEIs)',
                    columns: ['Component', 'Annual', 'Semestral', 'Trimester', 'Quarter Semester'],
                    rows: [
                        { scholarType: 'TOSF (Applicable to Private HEIs)', tsfLabel: '₱45,000.00', stipend: '₱22,500.00', bookAllowance: '₱15,000.00', total: '₱11,250.00' },
                        { scholarType: 'Stipend and Allowance', tsfLabel: '₱45,000.00', stipend: '₱22,500.00', bookAllowance: '₱15,000.00', total: '₱11,250.00' },
                    ],
                },
                {
                    institution: 'TVET Track (Technical Vocational Institutions)',
                    columns: ['Component', 'Per Academic Year'],
                    rows: [
                        { scholarType: 'TOSF (Eligible TVIs)', tsfLabel: 'Maximum ₱70,000.00', stipend: '', bookAllowance: '', total: '' },
                        { scholarType: 'Stipend (Public and Private TVIs)', tsfLabel: '₱40,000.00', stipend: '', bookAllowance: '', total: '' },
                        { scholarType: 'Book and Connectivity Allowance (Public and Private TVIs)', tsfLabel: '₱10,000.00', stipend: '', bookAllowance: '', total: '' },
                    ],
                },
            ],
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
            'Lorem ipsum dolor sit amet. The SIDA SGP is open to qualified and deserving children and dependents of sugarcane industry workers and small sugarcane farmers, encouraging undergraduate and graduate students who will enroll or are currently enrolled in relevant fields of discipline in State Universities and Colleges (SUCs).',
        eligibility: [
            'Filipino citizen',
            'Must be a dependent of a sugarcane industry worker or small sugarcane farmer',
            'For undergraduate: high school graduate or with earned college academic units relevant to the identified degree program',
            'For graduate: with relevant undergraduate degree program and entry-level requirements of the identified SUC',
            'Combined annual gross income of parent/guardian not to exceed PHP500,000.00',
        ],
        documentaryRequirements: [
            'Birth Certificate issued by the Local Civil Registry or PSA',
            'Form 138 / High School Report Card',
            'For Lifelong Learners eligible for college: High School Report Card',
            'Duly Certified Copy of Grades for the latest semester/term attended',
            'Certificate of Good Moral Character from the last school attended',
            "Certificate from SRA as one (1) of the following: Sugarcane Industry Workers and Small Sugarcane Farmer's children and dependents",
            'PCA Certification, issued by PCA Regional Office (PCA RO) to NCFRS registered coconut farmers/farmworkers',
            'Notice of Admission from the SUC',
            'Latest Income Tax Return (ITR) of applicant and spouse / parents / guardians (if employed)',
            'Certificate of Tax Exemption from the Bureau of Internal Revenue (BIR)',
            'Certificate of No Income from BIR',
            'Certificate of Indigency from their Barangay',
            'Certificate / Case Study from Department of Social Welfare and Development (DSWD)',
        ],
        icon: Sprout,
        accent: 'from-emerald-500 to-teal-600',
    },
    {
        id: 'acef-giahep',
        acronym: 'ACEF-GIAHEP',
        name: 'Agricultural Competitiveness Enhancement Fund – Grants-in-Aid for Higher Education Program',
        tagline: 'Promoting agriculture & fisheries through education',
        description:
            'Lorem ipsum dolor sit amet. The ACEF-GIAHEP aims to promote the development of agriculture and fisheries by increasing the number of graduates in higher education who are trained in the scientific bases of thought, entrepreneurial skills and technical competencies in the areas of agriculture, forestry, fisheries, and veterinary medicine education.',
        eligibility: [
            'Filipino citizen',
            'Graduating high school students, high school graduates, or with earned college academic units relevant to the identified degree program',
            'Will enroll or are currently enrolled in recognized programs of PHEIs or authorized programs of SUCs/LUCs in agriculture, forestry, fisheries, veterinary medicine education and related agricultural education programs',
            'Combined annual gross income of parents/guardians not to exceed Four Hundred Thousand Pesos (PhP400,000.00)',
            'Preferably dependent of registered farmers and/or fisherfolks in Registry System for Basic Sectors in Agriculture (RSBSA) and other registry systems',
            'Must not be a beneficiary of any government-funded student financial assistance program',
            'Must not be convicted of crimes involving moral turpitude',
        ],
        documentaryRequirements: [
            'Certified true copy of PSA Birth Certificate',
            'For graduating senior high graduates: duly certified true copy of grades for Grade 11 and 1st semester of Grade 12',
            'For applicants with earned units in college: duly certified copy of grades for the latest semester/term attended',
            'Proof of income: ANY of the following: Latest ITR of parents or guardian (if employed); Certificate of Tax Exemption from the Bureau of Internal Revenue (BIR); Certificate of No Income from BIR; Certificate / Case Study Report from City/Municipal Social Welfare and Development Office (C/MSWDO)',
            'Proof that the student applicant belonged to several groups (if applicable)',
        ],
        icon: Tractor,
        accent: 'from-amber-500 to-orange-600',
    },
    {
        id: 'msrs',
        acronym: 'MSRS',
        name: 'Medical Scholarship and Return Service Program',
        tagline: 'Producing physicians for underserved communities',
        description:
            'Lorem ipsum dolor sit amet. The MSRS program aims to help deserving medical students pursue medical education and training in the field of health and medicine. This shall be accessible to qualified and deserving Filipino students who are willing to undertake the mandatory return service, preferably but not limited to those who are residing in municipally without government physicians, geographically isolated and disadvantaged areas (GIDA) or from the top twenty (20%) provinces and/or municipalities.',
        eligibility: [
            'Must be a Filipino citizen residing in the Philippines',
            'Must be a graduating student or a graduate of an appropriate undergraduate program identified as a prerequisite for a Doctor of Medicine degree, from any HEI duly recognized by the CHED',
            'Including a direct entrant to the Integrated Liberal Arts and Medicine (INTARMED) Program who satisfactorily completes the first two (2) years of the Program',
            'Must have passed the entrance examinations and complied with other related requirements for admission into a Doctor of Medicine degree in the SUC or PHEI',
            'Must obtain a National Medical Admission Test (NMAT) score mandated by the CHED and required by the SUC or PHEI where the student intends to enroll in',
        ],
        documentaryRequirements: [
            'Duly accomplished application form',
            'Certified true copy of PSA Birth Certificate',
            'Certified true copy of Transcript of Records and Diploma',
            'Certificate of Good Moral Character',
            'NMAT Result',
            'Notice of Acceptance from the SUC or PHEI',
            'Medical Certificate of fitness to study medicine',
            'Latest Income Tax Return (ITR) of parents or legal guardians',
            'Affidavit of No Existing Scholarship Grant',
            'Two (2) pieces of recent 2x2 ID photos',
        ],
        benefits: [
            'Tuition and miscellaneous fees',
            'Monthly stipend and book allowance',
            'Mandatory return service in underserved communities upon graduation',
        ],
        icon: Stethoscope,
        accent: 'from-fuchsia-500 to-pink-600',
    },
    {
        id: 'coscho',
        acronym: 'COSCHO',
        name: 'Scholarship Program for Coconut Farmers and their Families',
        tagline: 'Empowering coconut farming communities through education',
        description:
            'Lorem ipsum dolor sit amet. The scholarship program aims to raise social equity of coconut farmers and ultimately alleviate poverty through the provision of quality education to coconut farmers and/or their dependents. The scholarship program is ultimately expected to improve agricultural productivity and modernization in the coconut industry by raising the knowledge of coconut farmers and/or their dependents on scientific advances in agricultural technology and other related fields, motivating the younger generation to be engaged in the agriculture sector.',
        eligibility: [
            'Filipino citizen',
            'Must be a registered coconut farmer or a dependent of one',
            'Combined parental annual gross income should not exceed PhP400,000',
            'Must be enrolled or about to enroll in a CHED-recognized HEI in any approved degree program related to agriculture, fisheries, food technology, or coconut industry development',
        ],
        documentaryRequirements: [
            'PSA Birth Certificate',
            'Form 138 / Latest Transcript of Records',
            'Certificate of Good Moral Character',
            'Certified true copy of latest grades',
            'PCA Certification of registered coconut farmer (parent/guardian/applicant)',
            'Latest ITR or Certificate of Tax Exemption from BIR',
            'Notice of Acceptance from the HEI',
            'Two (2) pieces of 2x2 ID photos',
        ],
        icon: TreePalm,
        accent: 'from-lime-500 to-green-600',
    },
];

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
