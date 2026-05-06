/**
 * STUFAPS program catalogue.
 *
 * Shape mirrors the eventual API response so swapping to a backend is just:
 *   const { programs } = usePage<{ programs: Program[] }>().props;
 * No component changes required.
 */

import type { LucideIcon } from 'lucide-react';
import { GraduationCap, Stethoscope, Sprout, TreePalm, Tractor, Star } from 'lucide-react';

export type Program = {
    id: string;
    acronym: string;
    name: string;
    tagline: string;
    description: string;
    eligibility: string[];
    documentaryRequirements: string[];
    otherRequirements?: string[];
    benefits?: string[];
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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. The CMSP is a competitive scholarship initiative of the Commission on Higher Education designed for incoming first-year college students who have demonstrated exceptional academic performance and potential for excellence in higher education.',
        eligibility: [
            'Filipino citizen',
            'Graduate of a Senior High School in the Philippines with a minimum GWA of 93% or its equivalent',
            'Combined annual income of the parents or legal guardians should not exceed Five Hundred Thousand Pesos (PHP500,000.00)',
        ],
        documentaryRequirements: [
            'Accomplished application form using Annex A',
            'Copy of Birth certificate issued by National Statistics Office (NSO) or Philippine Statistics Authority (PSA)',
            'Certified true copy of the Form 138 (Learner’s Progress Report Card or School Form 9 (SF9)) duly signed by the registrar or an authorized representative of the senior high school attended',
            'Latest Income Tax Return (ITR) of parents or legal guardian',
            'Certificate of Tax Exemption / Non Filer issued by the Bureau of Internal Revenue (BIR)',
            'Certified true copy of latest contract or proof of income for children of Overseas Filipino Workers (OFW) and Seafarers',
            'Social Case Study Report issued by the City/Municipal Social Welfare and Development Office (C/MSWDO)',
        ],
        otherRequirements: [
            'PWD ID issued by C/MSWDO or Certification of Disability issued by the Persons with Disability Affairs Office (PDAO)',
            'Solo Parent ID of applicant or his/her parent issued by C/MSWDO',
            'Applicant’s Senior Citizen ID issued by C/MSWDO',
            'Certification issued by Department of Human Settlements and Urban Development (DHSUD) or C/MSWDO to Underprivileged and Homeless family',
            'Social Case Study Report issued by C/MSWDO covered under Magna Carta for the Poor and/or First Generation Students',
            'Certification issued by the National Commission on Indigenous Peoples (NCIP) to the Indigenous People',
            'Notarized Certificate of Guardianship, issued by the legal guardian of the student applicant, if applicable',
        ],
        icon: GraduationCap,
        accent: 'from-sky-500 to-blue-600',
    },
    {
        id: 'bpmsp',
        acronym: 'BPMSP',
        name: 'Bagong Pilipinas Merit Scholarship Program',
        tagline: 'A flagship merit-based program under Bagong Pilipinas',
        description:
            'Lorem ipsum dolor sit amet. The Bagong Pilipinas Merit Scholarship Program is a government initiative grounded in the Higher Education Act of 1994 and TESDA Act of 1994, aligned with the directive of President Ferdinand R. Marcos, Jr., to support academically outstanding Filipino students implemented by CHED, DepEd, and TESDA.',
        eligibility: [
            'Open to Filipino SHS graduates with parents’ combined annual gross income not exceeding PhP 2,000,000',
            'Higher Education Track: Top 5 of graduating class or with a minimum GWA of 95%',
            'TVET Diploma Track: Minimum GWA of 90%',
            'Must render mandatory service in the Philippines after graduation',
        ],
        documentaryRequirements: [
            'Accomplished application form',
            'PSA Birth Certificate',
            'Certified true copy of Form 138 / Form 137',
            'Certificate of Good Moral Character',
            'Latest Income Tax Return (ITR) or Certificate of Tax Exemption',
            'Certificate of Top Ranking from the school registrar',
            'Two recent 2x2 ID photos',
        ],
        benefits: [
            'Full tuition and miscellaneous fees',
            'Monthly stipend',
            'Book and learning materials allowance',
            'Thesis and graduation allowance',
        ],
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
            'Certificate from SRA as one (1) of the following: Sugarcane Industry Workers and Small Sugarcane Farmer’s children and dependents',
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
        'Proof of Citizenship: A copy of the applicant’s PSA Birth Certificate',
        'Academic Records',
        'For Higher Education: Certified true copy of the Grade 12 Report Card (SF9) and a certificate from the school head confirming the student is in the Top 5 of the graduating class',
        'For TVET: Certified true copy of the Grade 12 Report Card showing a GWA of at least 90%',
        'Proof of Income: Latest Income Tax Return (ITR) of parents/guardians or a Certificate of Tax Exemption from the BIR',
        'Proof of Residency: Barangay Certificate or any valid government ID showing the applicant’s address',
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
