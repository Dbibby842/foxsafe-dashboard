/* ============================================================
   FoxSafe Dashboard — Fox Group Quarries
   Data sourced from the OneDrive folder "Fox Group Quarries"
   ============================================================ */

/* ---------- Theme toggle ---------- */
const themeToggle = document.getElementById('theme-toggle');
themeToggle?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
});

/* ---------- Clock ---------- */
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const date = now.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  });
  const t = document.getElementById('clock-time');
  const d = document.getElementById('clock-date');
  if (t) t.textContent = time;
  if (d) d.textContent = date;
}
updateClock();
setInterval(updateClock, 30 * 1000);

/* ============================================================
   DATA — Fox Group Quarries
   ============================================================ */

/* ---------- Quarry sites ---------- */
const sites = [
  {
    id: 'ellel',
    name: 'Ellel Crag Quarry',
    location: 'Ellel, Lancashire',
    tag: 'Induction live',
    accent: 'amber',
    induction: 'https://docs.google.com/forms/d/1dJ7p06bKG-Jfy8ELKhhFi62ylU1HRssV0GfCmx2DP2M/viewform',
    docs: [{ label: 'Induction sheet (DOCX)', href: 'docs/Ellel-Crag-Quarry-Induction.docx' }],
  },
  {
    id: 'lydiate',
    name: 'Lydiate Lane Quarry',
    location: 'Lydiate Lane, Lancashire',
    tag: 'Induction live',
    accent: 'amber',
    induction: 'https://docs.google.com/forms/d/12l9MSv4qyMev74lSeiH3Lgmqt4hUXgs2-D1zaUgdxI4/viewform',
    docs: [{ label: 'Induction sheet (DOCX)', href: 'docs/Lydiate-Lane-Quarry-Induction.docx' }],
  },
  {
    id: 'bradleys',
    name: "Bradley's Sandpit Quarry",
    location: "Bradley's Sandpit",
    tag: 'Induction live',
    accent: 'lime',
    induction: 'https://docs.google.com/forms/d/1tHtLuZOtqh1YnS6wSHUu0W6l8nOZRDyDI8WMnuBlJH8/viewform',
    docs: [{ label: 'Induction sheet (DOCX)', href: 'docs/Bradleys-Sandpit-Quarry-Induction.docx' }],
  },
  {
    id: 'woods',
    name: 'Woods Waste Landfill',
    location: 'Woods Waste',
    tag: 'Induction live',
    accent: 'navy',
    induction: 'https://docs.google.com/forms/d/1t9CIssftUjghLSKHpSeT-K4PmqpDUOWpm-GJqWiEQlM/viewform',
    docs: [{ label: 'Induction sheet (DOCX)', href: 'docs/Woods-Waste-Induction.docx' }],
  },
  {
    id: 'tong',
    name: 'Tong (Bacup) Quarry',
    location: 'Tong, Lancashire',
    tag: 'Induction live',
    accent: 'amber',
    induction: 'https://docs.google.com/forms/d/1L3oJSCpc3rk98vkRWTtuqEvGGEN-tgccMxJJDDaTSyA/viewform',
    docs: [{ label: 'Induction sheet (PDF)', href: 'docs/Tong-Quarry-Induction.pdf' }],
  },
];

/* ---------- Risk assessments (Tong (Bacup) Quarry register) ---------- */
const riskAssessments = {
  Plant: [
    { code: 'P001', title: 'Operating 360 Excavator', doc: 'docs/RA-P001.pdf' },
    { code: 'P002', title: 'Operating Dozer', doc: 'docs/RA-P002.pdf' },
    { code: 'P003', title: 'Operating Forward Tipping Dumper', doc: 'docs/RA-P003.pdf' },
    { code: 'P003A', title: 'Operating Tipping Dumper', doc: 'docs/RA-P003A.pdf' },
    { code: 'P004', title: 'Operating Articulated Dump Truck (ADT)', doc: 'docs/RA-P004.pdf' },
    { code: 'P005', title: 'Operating Roller', doc: 'docs/RA-P005.pdf' },
    { code: 'P006', title: 'Operating Tractor', doc: 'docs/RA-P006.pdf' },
    { code: 'P007', title: 'Operating Crusher', doc: 'docs/RA-P007.pdf' },
    { code: 'P008', title: 'Operating Loading Shovel', doc: 'docs/RA-P008.pdf' },
    { code: 'P009', title: 'Operating Road Sweeper', doc: 'docs/RA-P009.pdf' },
    { code: 'P010', title: 'Towable Water Bowser', doc: 'docs/RA-P010.pdf' },
    { code: 'P011', title: 'Towable Fuel Bowser', doc: 'docs/RA-P011.pdf' },
    { code: 'P012', title: 'Static Fuel Bowser', doc: 'docs/RA-P012.pdf' },
    { code: 'P014', title: 'Telehandler', doc: 'docs/RA-P014.pdf' },
    { code: 'P019', title: 'Operating Wash Plant', doc: 'docs/RA-P019.pdf' },
    { code: 'P020', title: 'Operating Screener', doc: 'docs/RA-P020.pdf' },
  ],
  Transport: [
    { code: 'T001', title: 'Loading Tipper Wagon', doc: 'docs/RA-T001.pdf' },
    { code: 'T002', title: 'Loading Forward Tipping Dumper', doc: 'docs/RA-T002.pdf' },
    { code: 'T003', title: 'Loading Articulated Dump Trucks (ADT)', doc: 'docs/RA-T003.pdf' },
    { code: 'T004', title: 'Driving Tipper Wagon (on site)', doc: 'docs/RA-T004.pdf' },
    { code: 'T005', title: 'Entry & Exit from Wagons', doc: 'docs/RA-T005.pdf' },
    { code: 'T006', title: 'Driving in Fox Group Yards', doc: 'docs/RA-T006.pdf' },
  ],
};

/* ---------- Safe Systems of Work (Tong (Bacup) Quarry set) ---------- */
const ssow = [
  { code: 'SSoW-008', title: 'The Use of Ride on Roller', doc: 'docs/SSoW-008.pdf' },
  { code: 'SSoW-009', title: 'The Use of Mobile Crusher', doc: 'docs/SSoW-009.pdf' },
  { code: 'SSoW-010', title: 'Repair of Vehicle Tyres', doc: 'docs/SSoW-010.pdf' },
  { code: 'SSoW-011', title: 'Recovery of Trapped Wagons', doc: 'docs/SSoW-011.pdf' },
  { code: 'SSoW-012', title: 'The Use of Screener', doc: 'docs/SSoW-012.pdf' },
  { code: 'SSoW-014', title: 'Securing Plant, Machinery & Attachments prior to Transportation', doc: 'docs/SSoW-014.pdf' },
  { code: 'SSoW-015', title: 'Tipping Loads', doc: 'docs/SSoW-015.pdf' },
  { code: 'SSoW-016', title: 'Loading Tipper Wagons', doc: 'docs/SSoW-016.pdf' },
  { code: 'SSoW-017', title: 'Loading & Unloading of Plant & Machinery', doc: 'docs/SSoW-017.pdf' },
  { code: 'SSoW-020', title: 'The Use of 360 Excavators', doc: 'docs/SSoW-020.pdf' },
  { code: 'SSoW-023', title: 'The Use of Excavators in Lifting Operations', doc: 'docs/SSoW-023.pdf' },
  { code: 'SSoW-029', title: 'The Use of Loading Shovels', doc: 'docs/SSoW-029.pdf' },
  { code: 'SSoW-047', title: 'The Use of Vehicles on Construction Sites', doc: 'docs/SSoW-047.pdf' },
  { code: 'SSoW-051', title: 'Managing Dust in Construction', doc: 'docs/SSoW-051.pdf' },
  { code: 'SSoW-057', title: 'Casting Over Quarry Face', doc: 'docs/SSoW-057.pdf' },
  { code: 'SSoW-063', title: 'Working in a Quarry', doc: 'docs/SSoW-063.pdf' },
];

/* ---------- Permits, Checks & Procedures ---------- */
const permits = {
  'Health and Safety Policy & Insurance': [
    { code: 'POL', title: 'Fox Brothers (Leyland) — H&S Policy Statement (25-26)', doc: 'docs/Fox-Brothers-Leyland-HS-Policy-Statement.pdf' },
    { code: 'INS', title: 'Fox Brothers (Leyland) — Insurance', doc: 'docs/Fox-Brothers-Leyland-Insurance.pdf' },
    { code: 'POL', title: 'J A Jackson — H&S Policy Statement (26-27)', doc: 'docs/JA-Jackson-HS-Policy-Statement.pdf' },
    { code: 'INS', title: 'J A Jackson — Insurance', doc: 'docs/JA-Jackson-Insurance.pdf' },
  ],
  'Plant Check Sheets': [
    { code: 'CHK', title: 'Screener — Daily Check Sheet', doc: 'https://form.jotform.com/261654049909365?machineType=Screener' },
    { code: 'CHK', title: 'Excavator — Weekly Check Sheet', doc: 'https://form.jotform.com/261654049909365?machineType=Excavator' },
    { code: 'CHK', title: 'Loading Shovel — Daily Check Sheet', doc: 'https://form.jotform.com/261654049909365?machineType=Loading%20Shovel' },
    { code: 'CHK', title: 'Crusher — Daily Check Sheet', doc: 'https://form.jotform.com/261654049909365?machineType=Crusher' },
    { code: 'CHK', title: 'Dozer — Check Sheet', doc: 'https://form.jotform.com/261654049909365?machineType=Dozer' },
    { code: 'CHK', title: 'Dumper — Weekly Check Sheet', doc: 'https://form.jotform.com/261654049909365?machineType=Dumper' },
  ],
  'Permits to Work': [
    { code: 'PTW', title: 'General Permit to Work', doc: 'https://form.jotform.com/261662564334358?docType=Permit%20to%20Work%20%E2%80%94%20General' },
    { code: 'PTW-14', title: 'Working at Height Permit', doc: 'https://form.jotform.com/261662564334358?docType=Permit%20to%20Work%20%E2%80%94%20Working%20at%20Heights' },
    { code: 'PTW-15', title: 'Hot Works Permit', doc: 'https://form.jotform.com/261662564334358?docType=Permit%20to%20Work%20%E2%80%94%20Hot%20Works' },
    { code: 'PTW-16', title: 'Permit to Dig', doc: 'https://form.jotform.com/261662564334358?docType=Permit%20to%20Work%20%E2%80%94%20Dig' },
    { code: 'SWM', title: 'Surface Water Management Checklist', doc: 'https://form.jotform.com/261662564334358?docType=Surface%20Water%20Management%20Checklist' },
  ],
  'Inspections': [
    { code: 'INS', title: 'Daily Recycling Yard / Tip Inspection', doc: 'https://form.jotform.com/251733443036351' },
    { code: 'INS', title: 'Weekly Inspection Report', doc: 'https://form.jotform.com/251683874798075' },
  ],
  'Incident & Reporting': [
    { code: 'INC', title: 'Accident & Near Miss Reporting Procedure (V6)', doc: 'docs/INC-Accident-Near-Miss-Procedure.pdf' },
    { code: 'INC', title: 'Accident / Incident Reporting Flowchart', doc: 'docs/INC-Reporting-Flowchart.pdf' },
    { code: 'FORM', title: 'Accident Report Form (online)', doc: 'https://docs.google.com/forms/d/1BsH2HjnSzJb5k-JbbBRYr0VDPwfH5-vRsiHF07J3sCM/viewform' },
    { code: 'FORM', title: 'Near Miss Report Form 2025 (online)', doc: 'https://docs.google.com/forms/d/1aXyo6o193Vb45RH32ywvIikrofgyuIdU9o9o52u85is/viewform' },
  ],
  'Rules & Procedures': [
    { code: 'PRC', title: 'Daily Briefing (V2)', doc: 'https://form.jotform.com/261662564334358?docType=Daily%20Pre-Start%20Briefing' },
    { code: 'PRC', title: 'General Conduct Rules', doc: 'docs/PRC-General-Conduct-Rules.pdf' },
    { code: 'PRC', title: 'Vehicle Rules', doc: 'docs/PRC-Vehicle-Rules.pdf' },
    { code: 'PRC', title: 'Spill Response Procedure', doc: 'docs/PRC-Spill-Response.pdf' },
    { code: 'PRC', title: 'Safe Quarry (Master)', doc: 'docs/PRC-Safe-Quarry.pdf' },
  ],
  'Traffic Management': [
    { code: 'TMP', title: 'Traffic Management Plan — Bradleys Sand Pit (Part 1)', doc: 'docs/Traffic-Management-Plan-Bradleys-Sandpit-1.pdf' },
    { code: 'TMP', title: 'Traffic Management Plan — Bradleys Sand Pit (Part 2)', doc: 'docs/Traffic-Management-Plan-Bradleys-Sandpit-2.pdf' },
    { code: 'TMP', title: 'Traffic Management Plan — Ellel Crag Quarry', doc: 'docs/Traffic-Management-Plan-Ellel-Crag-Quarry.pdf' },
    { code: 'TMP', title: 'Traffic Management Plan — Lydiate Lane Quarry', doc: 'docs/Traffic-Management-Plan-Lydiate-Lane-Quarry.pdf' },
    { code: 'TMP', title: 'Traffic Management Plan — Tong (Bacup) Quarry', doc: 'docs/Traffic-Management-Plan-Tong-Quarry.pdf' },
  ],
  'Geotechnical': [
    { code: 'GEO', title: 'Geotechnical Assessment Report — Bradleys Sand Pit (June 2025)', doc: 'docs/Geotechnical-Assessment-Report-Bradleys-Sand-Pit-June-2025.pdf' },
    { code: 'GEO', title: 'Geotechnical Assessment — Ellel Crag Quarry (December 2025)', doc: 'docs/Geotechnical-Assessment-Ellel-Crag-Quarry-December-2025.pdf' },
    { code: 'GEO', title: 'Geotechnical Assessment Report — Lydiate Lane Quarry (June 2025)', doc: 'docs/Geotechnical-Assessment-Report-Lydiate-Lane-Quarry-June-2025.pdf' },
    { code: 'GEO', title: 'Geotechnical Assessment — Tong (Bacup) Quarry (May 2024)', doc: 'docs/Geotechnical-Assessment-Tong-Quarry-May-2024.pdf' },
    { code: 'GEO', title: 'Geotechnical Assessment Summary & Management Report — Tong (Bacup) Quarry (May 2024)', doc: 'docs/Geotechnical-Assessment-Summary-Tong-Quarry-May-2024.pdf' },
    { code: 'GEO', title: 'Safety Procedures, Excavations & Tip Rules — Tong (Bacup) Quarry (Jul 2025)', doc: 'docs/Safety-Procedures-Excavations-Tip-Rules-Tong-Quarry-Jul-2025.pdf' },
  ],
  'Environmental': [
    { code: 'ENV', title: 'Dust Management Plan — Bradleys Sand Pit', doc: 'docs/Dust-Management-Plan-Bradleys-Sand-Pit.pdf' },
    { code: 'ENV', title: 'Dust Management Plan — Ellel Crag Quarry', doc: 'docs/Dust-Management-Plan-Ellel-Crag-Quarry.pdf' },
    { code: 'ENV', title: 'Dust Management Plan — Lydiate Lane Quarry', doc: 'docs/Dust-Management-Plan-Lydiate-Lane-Quarry.pdf' },
    { code: 'ENV', title: 'Dust Management Plan — Tong (Bacup) Quarry', doc: 'docs/Dust-Management-Plan-Tong-Quarry.pdf' },
    { code: 'ENV', title: 'Dust Management Plan — Woods Waste Westby', doc: 'docs/Dust-Management-Plan-Woods-Waste-Westby.pdf' },
    { code: 'ENV', title: 'Environmental Procedures Plan', doc: 'docs/Environmental-Procedures-Plan.pdf' },
  ],
};

/* ---------- Toolbox Talks — Group HSEQ library, grouped by 2026 bi-monthly calendar ---------- */
const tbtLibrary = {
  'Jan \u2013 Mar 2026': [
    { code: 'TBT-016', title: '016 \u2014 Respiratory Protection', doc: 'docs/tbt/016_-_Respitory_Protection_24.pdf' },
    { code: 'TBT-021', title: '021 \u2014 Fuel and Oil', doc: 'docs/tbt/021_-_Fuel_and_Oil_24.pdf' },
    { code: 'TBT-025', title: '025 \u2014 Hi Visibility Clothing', doc: 'docs/tbt/025_-_Hi_Visibility_Clothing_24.pdf' },
    { code: 'TBT-044', title: '044 \u2014 Manual Handling', doc: 'docs/tbt/044_-_Manual_Handling_24.pdf' },
    { code: 'TBT-046', title: '046 \u2014 Fumes, Odour & Smoke', doc: 'docs/tbt/046_-_Fumes_Odour_and_Smoke_24.pdf' },
    { code: 'TBT-053', title: '053 \u2014 Avoiding Crushing Injuries', doc: 'docs/tbt/053_-_Avoiding_Crushing_Injuries_24_.pdf' },
    { code: 'TBT-054', title: '054 \u2014 Entering and Exiting Plant & Machinery', doc: 'docs/tbt/054_-_Entering_and_Exiting_Plant_and_Machinery_24.pdf' },
    { code: 'TBT-055', title: '055 \u2014 Lung Health & Dust in Construction', doc: 'docs/tbt/055_-_Lung_Health_and_Dust_in_Construction_24.pdf' },
    { code: 'TBT-056', title: '056 \u2014 Noise Pollution', doc: 'docs/tbt/056_-_Noise_Pollution_24.pdf' },
    { code: 'TBT-062', title: '062 \u2014 Drug and Alcohol Abuse at Work', doc: 'docs/tbt/062_-_Drug_and_Alcohol_Abuse_at_Work_23.pdf' },
    { code: 'TBT-073', title: '073 \u2014 Leptospirosis', doc: 'docs/tbt/073_-_Leptospirosis_24.pdf' },
    { code: 'TBT-076', title: '076 \u2014 Pedestrian Safety', doc: 'docs/tbt/076_-PEDESTRIAN_SAFETY.pdf' },
    { code: 'TBT-080', title: '080 \u2014 Wearing Seat Belts When Operating Plant', doc: 'docs/tbt/080_-_Wearing_Seat_Belts_When_Operating_Plant.pdf' },
  ],
  'Mar \u2013 May 2026': [
    { code: 'TBT-010', title: '010 \u2014 Safety Awareness', doc: 'docs/tbt/010_-_Safety_Awareness_23.pdf' },
    { code: 'TBT-014', title: '014 \u2014 Housekeeping', doc: 'docs/tbt/014_-_Housekeeping_24.pdf' },
    { code: 'TBT-018', title: '018 \u2014 Attitude and Behaviour', doc: 'docs/tbt/018_-_Attitude_and_Behaviour_24_.pdf' },
    { code: 'TBT-022', title: '022 \u2014 Slips, Trips & Falls', doc: 'docs/tbt/022_-_Slips_Trips_and_Falls_24.pdf' },
    { code: 'TBT-026', title: '026 \u2014 Getting Caught', doc: 'docs/tbt/026_-_Getting_Caught_24.pdf' },
    { code: 'TBT-029', title: '029 \u2014 Health Risks from the Sun', doc: 'docs/tbt/029_-_Health_Risks_from_the_Sun_24.pdf' },
    { code: 'TBT-032', title: '032 \u2014 Safety in the Absence of Unreasonable Risk', doc: 'docs/tbt/032_-_Safety_in_the_Absence_of_Unreasonable_Risk_24.pdf' },
    { code: 'TBT-035', title: '035 \u2014 CoSHH', doc: 'docs/tbt/035_-_CoSHH_24.pdf' },
    { code: 'TBT-038', title: '038 \u2014 General Safety Legislation', doc: 'docs/tbt/038_-_General_Safety_Legislation_24.pdf' },
    { code: 'TBT-045', title: '045 \u2014 Basic First Aid', doc: 'docs/tbt/045_-_Basic_First_Aid_24.pdf' },
    { code: 'TBT-059', title: '059 \u2014 Cyber Safety', doc: 'docs/tbt/059_-_Cyber_Safety_24.pdf' },
    { code: 'TBT-075', title: '075 \u2014 Hand Arm Vibration', doc: 'docs/tbt/075_-_Hand_Arm_Vibration.pdf' },
    { code: 'TBT-079', title: '079 \u2014 Recording Accidents', doc: 'docs/tbt/079_-_Recording_Accidents_24.pdf' },
  ],
  'May \u2013 Jun 2026': [
    { code: 'TBT-011', title: '011 \u2014 Hand & Power Tools', doc: 'docs/tbt/011_-_Hand_and_Power_Tools_24.pdf' },
    { code: 'TBT-015', title: '015 \u2014 Stairways and Walkways', doc: 'docs/tbt/015_-_Stairways_and_Walkways_24.pdf' },
    { code: 'TBT-019', title: '019 \u2014 Carelessness', doc: 'docs/tbt/019_-_Carelessness_24.pdf' },
    { code: 'TBT-023', title: '023 \u2014 Common Causes of Accidents', doc: 'docs/tbt/023_-_Common_Causes_of_Accidents_24.pdf' },
    { code: 'TBT-027', title: '027 \u2014 Hand Tools Safety', doc: 'docs/tbt/027_-_Hand_Tools_Safety_24.pdf' },
    { code: 'TBT-030', title: '030 \u2014 Lesson Learnt', doc: 'docs/tbt/030_-_Lesson_Learnt_24.pdf' },
    { code: 'TBT-060', title: '060 \u2014 Mobile Phones & Driving', doc: 'docs/tbt/060_-_Mobile_Phones_and_Driving_24.pdf' },
    { code: 'TBT-061', title: '061 \u2014 Environmental Awareness', doc: 'docs/tbt/061_-_Environmental_Awareness_24.pdf' },
    { code: 'TBT-063', title: '063 \u2014 Plant & Machinery', doc: 'docs/tbt/063_-_Plant_and_Machinery_24.pdf' },
    { code: 'TBT-064', title: '064 \u2014 Waste Acceptance Process', doc: 'docs/tbt/064_-_Waste_Acceptance_Process_24.pdf' },
    { code: 'TBT-065', title: '065 \u2014 Operating an Excavator on Slopes', doc: 'docs/tbt/065_-_Operating_an_Excavator_on_Slopes_24.pdf' },
    { code: 'TBT-072', title: '072 \u2014 Working Near Buried Services', doc: 'docs/tbt/072_-_Working_Near_Buried_Services_23.pdf' },
  ],
  'Jun \u2013 Aug 2026': [
    { code: 'TBT-013', title: '013 \u2014 Being Prepared for Emergencies', doc: 'docs/tbt/013_-_Being_Prepared_for_Emergencies_24.pdf' },
    { code: 'TBT-017', title: '017 \u2014 Good Hygiene can keep you healthy', doc: 'docs/tbt/017_-_Good_Hygiene_can_keep_you_healthy_24.pdf' },
    { code: 'TBT-020', title: '020 \u2014 Seatbelts', doc: 'docs/tbt/020_-_Seatbelts_24.pdf' },
    { code: 'TBT-024', title: '024 \u2014 Falls from Height', doc: 'docs/tbt/024_-_Falls_from_Height_24.pdf' },
    { code: 'TBT-028', title: '028 \u2014 Identifying Fatigue', doc: 'docs/tbt/028_-_Identifying_Fatigue_24.pdf' },
    { code: 'TBT-066', title: '066 \u2014 Air Quality', doc: 'docs/tbt/066_-_Air_Quality_24.pdf' },
    { code: 'TBT-067', title: '067 \u2014 Vehicle Wheels & Tyres', doc: 'docs/tbt/067_-_Vehicle_Wheels_and_Tyres_24.pdf' },
    { code: 'TBT-068', title: '068 \u2014 Waiting To Be Loaded', doc: 'docs/tbt/068_-_Waiting_To_Be_Loaded_24.pdf' },
    { code: 'TBT-069', title: '069 \u2014 Driving on Site', doc: 'docs/tbt/069_-_Driving_on_Site_24.pdf' },
    { code: 'TBT-070', title: '070 \u2014 Near Misses', doc: 'docs/tbt/070_-_Near_Misses_24.pdf' },
  ],
  'Aug \u2013 Oct 2026': [
    { code: 'TBT-012', title: '012 \u2014 Office Safety', doc: 'docs/tbt/012_-_Office_Safety_24.pdf' },
    { code: 'TBT-040', title: '040 \u2014 First Aid Requirements', doc: 'docs/tbt/040_-_First_Aid_Requirements_24.pdf' },
    { code: 'TBT-042', title: '042 \u2014 Pressure Washer Safety', doc: 'docs/tbt/042_-_Pressure_Washer_Safety_24.pdf' },
    { code: 'TBT-043', title: '043 \u2014 Protect Your Hands', doc: 'docs/tbt/043_-_Protect_Your_Hands_24.pdf' },
    { code: 'TBT-048', title: '048 \u2014 Safety Signs', doc: 'docs/tbt/048_-_Safety_Signs_24.pdf' },
    { code: 'TBT-049', title: '049 \u2014 The Fire Triangle', doc: 'docs/tbt/049_-_The_Fire_Triangle_24.pdf' },
    { code: 'TBT-051', title: '051 \u2014 Basic Recycling', doc: 'docs/tbt/051_-_Basic_Recycling_24.pdf' },
    { code: 'TBT-052', title: '052 \u2014 Personal Hygiene', doc: 'docs/tbt/052_-_Personal_Hygiene_24.pdf' },
    { code: 'TBT-057', title: '057 \u2014 Spill Control', doc: 'docs/tbt/057_-_Spill_Control_24.pdf' },
    { code: 'TBT-058', title: '058 \u2014 Computer Eye Strain', doc: 'docs/tbt/058_-_Computer_Eye_Strain_24.pdf' },
  ],
  'Oct \u2013 Dec 2026': [
    { code: 'TBT-031', title: '031 \u2014 Hard Hats & Safety Helmets', doc: 'docs/tbt/031_-_Hard_Hats_and_Safety_Helmets_24.pdf' },
    { code: 'TBT-033', title: '033 \u2014 Lifting Safely', doc: 'docs/tbt/033_-_Lifting_Safely_24.pdf' },
    { code: 'TBT-034', title: '034 \u2014 Who is responsible for Safety', doc: 'docs/tbt/034_-_Who_is_responsible_for_Safety_24.pdf' },
    { code: 'TBT-036', title: '036 \u2014 Environmental Construction Nuisance', doc: 'docs/tbt/036_-_Environmental_Construction_Nuisance_24.pdf' },
    { code: 'TBT-037', title: '037 \u2014 Excavations', doc: 'docs/tbt/037_-_Excavations_24.pdf' },
    { code: 'TBT-039', title: '039 \u2014 Ground Contamination', doc: 'docs/tbt/039_-_Ground_Contamination_24.pdf' },
    { code: 'TBT-041', title: '041 \u2014 Inspection of Mobile Plant & Equipment', doc: 'docs/tbt/041_-_Inspection_of_Mobile_Plant_and_Equipment_24.pdf' },
    { code: 'TBT-047', title: '047 \u2014 Refueling Plant & Equipment', doc: 'docs/tbt/047_-_Refueling_Plant_and_Equipment_24.pdf' },
    { code: 'TBT-050', title: '050 \u2014 Plant & Equipment General', doc: 'docs/tbt/050_-_Plant_and_Equipment_General_24.pdf' },
    { code: 'TBT-071', title: '071 \u2014 Equality and Diversity', doc: 'docs/tbt/071_-_Equality_and_Diversity_23.pdf' },
  ],
  'Reference & Additional': [
    { code: 'TBT-077', title: '077 \u2014 Welfare Facilities GP350', doc: 'docs/tbt/077_-Welfare_Facilities_GP350.pdf' },
  ],
};

/* ----------------------------------------------------------
   Statutory Appointments — Quarries Regulations 1999
   Split into two sub-groups:
     • Reg 8(1)(d) — site-level supervisor appointment (per site)
     • Reg 8(1)(c) — appointed competent manager (named individual)
   ---------------------------------------------------------- */
const reg8Groups = [
  {
    id: 'reg8-sites',
    heading: 'Site supervisor appointments — Reg 8(1)(d)',
    blurb:
      'Signed appointment of the competent supervisor for each site, under regulation 8(1)(d) of the Quarries Regulations 1999.',
    items: [
      {
        code: 'REG 8(1)(D)',
        title: 'Tong (Bacup) Quarry — Supervisor Appointment',
        manager: 'Barry Thompson',
        role: 'Quarries Operations Manager',
        effective: 'Effective 5 April 2025',
        doc: 'docs/REG8-Barry-Thompson-signed.pdf',
      },
      {
        code: 'REG 8(1)(D)',
        title: 'Ellel Crag Quarry — Supervisor Appointment',
        manager: 'Barry Thompson',
        role: 'Quarries Operations Manager',
        effective: 'Effective 5 April 2025',
        doc: 'docs/REG8-Barry-Thompson-signed.pdf',
      },
      {
        code: 'REG 8(1)(D)',
        title: 'Lydiate Lane Quarry — Supervisor Appointment',
        manager: 'Barry Thompson',
        role: 'Quarries Operations Manager',
        effective: 'Effective 5 April 2025',
        doc: 'docs/REG8-Barry-Thompson-signed.pdf',
      },
      {
        code: 'REG 8(1)(D)',
        title: 'Woods Waste Landfill — Supervisor Appointment',
        manager: 'Barry Thompson',
        role: 'Quarries Operations Manager',
        effective: 'Effective 5 April 2025',
        doc: 'docs/REG8-Barry-Thompson-signed.pdf',
      },
    ],
  },
  {
    id: 'reg8-managers',
    heading: 'Appointed managers — Reg 8(1)(c)',
    blurb:
      'Named competent individuals appointed to take charge of quarry operations, under regulation 8(1)(c) of the Quarries Regulations 1999.',
    items: [
      {
        code: 'REG 8(1)(C)',
        title: 'Barry Thompson — Appointed Manager',
        manager: 'Barry Thompson',
        role: 'Quarries Operations Manager',
        scope: 'Ellel, Lydiate Lane, Tong (Bacup) Quarry and Woods Waste',
        effective: 'Effective 5 April 2025',
        doc: 'docs/REG8-Barry-Thompson-signed.pdf',
      },
      {
        code: 'REG 8(1)(C)',
        title: 'Roy Underwood — Appointed Manager',
        manager: 'Roy Underwood',
        role: 'Operations Manager',
        scope: "Bradley's Sandpit, Fulwood",
        substitute: 'Substitute: Alison Miller, Assistant Quarry Manager',
        effective: 'Effective 5 April 2025',
        doc: 'docs/REG8-Roy-Underwood-Bradleys-Sandpit-signed.pdf',
      },
    ],
  },
];

/* ============================================================
   RENDERING
   ============================================================ */

function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ---------- Site tiles ---------- */
function renderSites() {
  const grid = document.getElementById('site-grid');
  if (!grid) return;
  grid.innerHTML = sites
    .map((s) => {
      const docsHtml = s.docs
        .map(
          (d) =>
            `<li><a class="doc-link" href="${esc(d.href)}" target="_blank" rel="noopener">
               <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>
               ${esc(d.label)}
             </a></li>`,
        )
        .join('');
      return `
        <article class="site-card site-card--${esc(s.accent)}" role="listitem" data-search="${esc((s.name + ' ' + s.location).toLowerCase())}">
          <header class="site-card__head">
            <div>
              <h3 class="site-card__name">${esc(s.name)}</h3>
              <p class="site-card__loc">${esc(s.location)}</p>
            </div>
            ${s.tag ? `<span class="site-card__tag">${esc(s.tag)}</span>` : ''}
          </header>
          <ul class="site-card__docs">${docsHtml}</ul>
          ${s.induction ? `<footer class="site-card__foot">
            <a class="btn btn--primary btn--sm" href="${esc(s.induction)}" target="_blank" rel="noopener">
              Open site induction
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
            </a>
          </footer>` : ''}
        </article>`;
    })
    .join('');
}

/* ---------- Risk assessment groups ---------- */
function renderRA() {
  const wrap = document.getElementById('ra-groups');
  if (!wrap) return;
  const groups = Object.entries(riskAssessments)
    .map(([heading, items]) => {
      const cards = items
        .map(
          (r) => `
          <a class="ra-card" href="${esc(r.doc)}" target="_blank" rel="noopener" data-search="${esc((r.code + ' ' + r.title).toLowerCase())}" aria-label="Open ${esc(r.code)} ${esc(r.title)}">
            <span class="ra-card__code">${esc(r.code)}</span>
            <h4 class="ra-card__title">${esc(r.title)}</h4>
            <span class="card-doc-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>
            </span>
          </a>`,
        )
        .join('');
      const slug = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return `
        <section id="grp-${slug}" class="ra-group" data-group="${esc(heading.toLowerCase())}">
          <h3 class="ra-group__title">
            ${esc(heading)}
            <span class="ra-group__count">${items.length}</span>
          </h3>
          <div class="grid grid--ra">${cards}</div>
        </section>`;
    })
    .join('');
  wrap.innerHTML = groups;
}

/* ---------- Permits, Checks & Procedures groups ---------- */
function renderPermits() {
  const wrap = document.getElementById('prm-groups');
  if (!wrap) return;
  const groups = Object.entries(permits)
    .map(([heading, items]) => {
      const cards = items
        .map(
          (r) => `
          <a class="ra-card" href="${esc(r.doc)}" target="_blank" rel="noopener" data-search="${esc((r.code + ' ' + r.title).toLowerCase())}" aria-label="Open ${esc(r.title)}">
            <span class="ra-card__code">${esc(r.code)}</span>
            <h4 class="ra-card__title">${esc(r.title)}</h4>
            <span class="card-doc-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>
            </span>
          </a>`,
        )
        .join('');
      const slug = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return `
        <section id="grp-${slug}" class="ra-group" data-group="${esc(heading.toLowerCase())}">
          <h3 class="ra-group__title">
            ${esc(heading)}
            <span class="ra-group__count">${items.length}</span>
          </h3>
          <div class="grid grid--ra">${cards}</div>
        </section>`;
    })
    .join('');
  wrap.innerHTML = groups;
}

/* ---------- Toolbox Talks library ---------- */
function renderTBT() {
  const wrap = document.getElementById('tbt-groups');
  if (!wrap) return;
  const groups = Object.entries(tbtLibrary)
    .map(([heading, items]) => {
      const cards = items
        .map(
          (r) => `
          <a class="ra-card" href="${esc(r.doc)}" target="_blank" rel="noopener" data-search="${esc((r.code + ' ' + r.title).toLowerCase())}" aria-label="Open ${esc(r.title)}">
            <span class="ra-card__code">${esc(r.code)}</span>
            <h4 class="ra-card__title">${esc(r.title)}</h4>
            <span class="card-doc-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>
            </span>
          </a>`,
        )
        .join('');
      const slug = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return `
        <section id="grp-tbt-${slug}" class="ra-group" data-group="${esc(heading.toLowerCase())}">
          <h3 class="ra-group__title">
            ${esc(heading)}
            <span class="ra-group__count">${items.length}</span>
          </h3>
          <div class="grid grid--ra">${cards}</div>
        </section>`;
    })
    .join('');
  wrap.innerHTML = groups;
}

/* ---------- Reg 8 Supervisor Appointments (grouped) ---------- */
function reg8Card(r) {
  const searchBlob = [r.code, r.title, r.manager, r.role, r.scope, r.substitute]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  const managerLine = r.manager
    ? `<p class="reg8-card__manager"><span class="reg8-card__manager-name">${esc(r.manager)}</span><span class="reg8-card__manager-role">${esc(r.role || '')}</span></p>`
    : '';
  const scopeLine = r.scope
    ? `<p class="reg8-card__meta">Sites: ${esc(r.scope)}</p>`
    : '';
  const substituteLine = r.substitute
    ? `<p class="reg8-card__meta">${esc(r.substitute)}</p>`
    : '';
  const effectiveLine = r.effective
    ? `<p class="reg8-card__meta">${esc(r.effective)}</p>`
    : '';
  return `
      <a class="ssow-card reg8-card" href="${esc(r.doc)}" target="_blank" rel="noopener" data-search="${esc(searchBlob)}" aria-label="Open ${esc(r.title)} — ${esc(r.manager || '')}">
        <span class="ssow-card__code">${esc(r.code)}</span>
        <h4 class="ssow-card__title">${esc(r.title)}</h4>
        ${managerLine}
        ${scopeLine}
        ${substituteLine}
        ${effectiveLine}
        <span class="card-doc-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>
        </span>
      </a>`;
}

function renderReg8() {
  const wrap = document.getElementById('reg8-groups');
  if (!wrap) return;
  wrap.innerHTML = reg8Groups
    .map((g) => {
      const cards = g.items.map(reg8Card).join('');
      return `
        <section id="${esc(g.id)}" class="ra-group reg8-group" data-group="${esc(g.heading.toLowerCase())}">
          <h3 class="ra-group__title">
            ${esc(g.heading)}
            <span class="ra-group__count">${g.items.length}</span>
          </h3>
          <p class="reg8-group__blurb">${esc(g.blurb)}</p>
          <div class="grid grid--ssow">${cards}</div>
        </section>`;
    })
    .join('');
}

/* ---------- SSoW tiles ---------- */
function renderSSoW() {
  const grid = document.getElementById('ssow-grid');
  if (!grid) return;
  grid.innerHTML = ssow
    .map(
      (s) => `
      <a class="ssow-card" href="${esc(s.doc)}" target="_blank" rel="noopener" data-search="${esc((s.code + ' ' + s.title).toLowerCase())}" aria-label="Open ${esc(s.code)} ${esc(s.title)}">
        <span class="ssow-card__code">${esc(s.code)}</span>
        <h4 class="ssow-card__title">${esc(s.title)}</h4>
        <span class="card-doc-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>
        </span>
      </a>`,
    )
    .join('');
}

/* ---------- Induction tiles ---------- */
function renderInductions() {
  const grid = document.getElementById('ind-grid');
  if (!grid) return;
  grid.innerHTML = sites
    .map(
      (s) => `
      <article class="ind-card ind-card--${esc(s.accent)}">
        <div class="ind-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <path d="M14 14h3v3h-3zM17 17h4v4h-4zM14 20h3"/>
          </svg>
        </div>
        <div class="ind-card__body">
          <h4 class="ind-card__name">${esc(s.name)}</h4>
          <p class="ind-card__hint">Scan the QR at the gate or open the form below.</p>
          <a class="btn btn--ghost btn--sm" href="${esc(s.induction)}" target="_blank" rel="noopener">
            Open induction form
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
          </a>
        </div>
      </article>`,
    )
    .join('');
}

/* ============================================================
   SEARCH FILTERS
   ============================================================ */
function wireFilter(inputId, itemSelector, groupSelector) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll(itemSelector).forEach((el) => {
      const hay = el.dataset.search || el.textContent.toLowerCase();
      el.style.display = !q || hay.includes(q) ? '' : 'none';
    });
    if (groupSelector) {
      document.querySelectorAll(groupSelector).forEach((group) => {
        const visible = group.querySelectorAll(`${itemSelector}:not([style*="display: none"])`);
        group.style.display = visible.length ? '' : 'none';
      });
    }
  });
}

/* ============================================================
   INIT
   ============================================================ */
renderSites();
renderRA();
renderSSoW();
renderPermits();
renderTBT();
renderReg8();
// renderInductions();  // section removed

wireFilter('site-search', '.site-card');
wireFilter('ra-search', '#ra-groups .ra-card', '#ra-groups .ra-group');
wireFilter('ssow-search', '#ssow-grid .ssow-card');
wireFilter('prm-search', '#prm-groups .ra-card', '#prm-groups .ra-group');
wireFilter('tbt-search', '#tbt-groups .ra-card', '#tbt-groups .ra-group');
wireFilter('reg8-search', '#reg8-groups .ssow-card', '#reg8-groups .reg8-group');

/* Active nav-link on scroll + click */
const navLinks = document.querySelectorAll('.app-nav__link');
const navHrefs = new Set(
  Array.from(navLinks)
    .map((l) => l.getAttribute('href'))
    .filter((h) => h && h.startsWith('#')),
);
// Observe every section that has a matching nav link (parent sections + group anchors)
const sections = Array.from(navHrefs)
  .map((h) => document.getElementById(h.slice(1)))
  .filter(Boolean);
const setActive = (href) => {
  navLinks.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === href));
};
const io = new IntersectionObserver(
  (entries) => {
    // Pick the entry closest to the top of the viewport among those intersecting
    const visible = entries.filter((e) => e.isIntersecting);
    if (!visible.length) return;
    visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    setActive('#' + visible[0].target.id);
  },
  { rootMargin: '-30% 0px -60% 0px' },
);
sections.forEach((s) => io.observe(s));
// Apply active state immediately on click for snappier feedback
navLinks.forEach((l) => {
  l.addEventListener('click', () => {
    const href = l.getAttribute('href');
    if (href && href.startsWith('#')) setActive(href);
  });
});
