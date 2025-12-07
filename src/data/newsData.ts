export interface NewsItem {
  id: number;
  category: string;
  title: string;
  titleTe: string;
  summary: string;
  summaryTe: string;
  image: string;
  content: string;
  contentTe: string;
  date: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    category: "Local",
    title: " New Metro Line Opens in City Center",
    titleTe: "నగర కేంద్రంలో కొత్త మెట్రో లైన్ ప్రారంభం",
    summary: "The new metro line connecting the eastern suburbs to the city center officially opened today, promising to reduce commute times by 40%.",
    summaryTe: "తూర్పు శివారు ప్రాంతాలను నగర కేంద్రంతో కలుపుతూ కొత్త మెట్రో లైన్ ఈ రోజు అధికారికంగా ప్రారంభమైంది, ప్రయాణ సమయాన్ని 40% తగ్గిస్తుందని హామీ ఇచ్చింది.",
    image: "https://images.unsplash.com/AVphoto-1544620347-c4fd4a3d5957?w=800&q=80",
    content: "The long-awaited metro expansion has finally become a reality. Officials gathered this morning for a ribbon-cutting ceremony at the new Central Station hub. The line features 12 new stations, modern air-conditioned trains, and state-of-the-art safety systems. Commuters can expect trains every 5 minutes during peak hours. The project, which cost approximately $2.5 billion, was completed six months ahead of schedule.",
    contentTe: "ఎంతో కాలంగా ఎదురు చూస్తున్న మెట్రో విస్తరణ ఎట్టకేలకు నిజమైంది. కొత్త సెంట్రల్ స్టేషన్ హబ్ వద్ద ఈ ఉదయం రిబ్బన్ కట్టింగ్ వేడుకకు అధికారులు గుమిగూడారు. ఈ లైన్‌లో 12 కొత్త స్టేషన్లు, ఆధునిక ఎయిర్ కండిషన్డ్ రైళ్లు మరియు అత్యాధునిక భద్రతా వ్యవస్థలు ఉన్నాయి.",
    date: "2025-01-05"
  },
  {
    id: 2,
    category: "State",
    title: "Government Announces New Education Policy",
    titleTe: "కొత్త విద్యా విధానాన్ని ప్రకటించిన ప్రభుత్వం",
    summary: " NAVEEN State government unveils comprehensive education reform focusing on skill development and digital literacy for students.",
    summaryTe: "విద్యార్థుల నైపుణ్య అభివృద్ధి మరియు డిజిటల్ అక్షరాస్యతపై దృష్టి సారించి సమగ్ర విద్యా సంస్కరణలను రాష్ట్ర ప్రభుత్వం ఆవిష్కరించింది.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    content: "In a landmark decision, the state government has announced sweeping changes to the education system. The new policy emphasizes practical skills, coding education from grade 6, and mandatory digital literacy programs. Schools will receive upgraded computer labs and high-speed internet connectivity. The reform also includes teacher training programs and revised curriculum frameworks.",
    contentTe: "ఓ చారిత్రాత్మక నిర్ణయంలో, రాష్ట్ర ప్రభుత్వం విద్యా వ్యవస్థలో విస్తృత మార్పులను ప్రకటించింది. కొత్త విధానం ఆచరణాత్మక నైపుణ్యాలు, 6వ తరగతి నుండి కోడింగ్ విద్య మరియు తప్పనిసరి డిజిటల్ అక్షరాస్యత కార్యక్రమాలను నొక్కి చెబుతుంది.",
    date: "2025-01-04"
  },
  {
    id: 3,
    category: "National",
    title: "Economic Growth Reaches 7.5% This Quarter",
    titleTe: "ఈ త్రైమాసికంలో ఆర్థిక వృద్ధి 7.5%కి చేరింది",
    summary: "India's economy shows robust growth as manufacturing and services sectors exceed expectations.",
    summaryTe: "తయారీ మరియు సేవల రంగాలు అంచనాలను మించడంతో భారత ఆర్థిక వ్యవస్థ బలమైన వృద్ధిని చూపుతోంది.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    content: "The latest economic data reveals that India's GDP has grown by 7.5% in the current quarter, surpassing analyst expectations of 6.8%. The manufacturing sector showed particularly strong performance with 9.2% growth, while the services sector contributed 7.1%. Experts attribute this growth to increased foreign investment, government infrastructure spending, and strong domestic consumption.",
    contentTe: "తాజా ఆర్థిక డేటా ప్రకారం ప్రస్తుత త్రైమాసికంలో భారతదేశ GDP 7.5% వృద్ధి చెందింది, విశ్లేషకుల అంచనా 6.8%ను అధిగమించింది. తయారీ రంగం 9.2% వృద్ధితో అత్యంత బలమైన పనితీరును చూపించగా, సేవల రంగం 7.1% వాటాను అందించింది.",
    date: "2025-01-03"
  },
  {
    id: 4,
    category: "International",
    title: "Global Climate Summit Reaches Historic Agreement",
    titleTe: "గ్లోబల్ క్లైమేట్ సమ్మిట్ చారిత్రాత్మక ఒప్పందానికి చేరుకుంది",
    summary: "World leaders commit to ambitious carbon reduction targets at the annual climate conference.",
    summaryTe: "వార్షిక వాతావరణ సమావేశంలో ప్రపంచ నేతలు ఆశాజనక కార్బన్ తగ్గింపు లక్ష్యాలకు కట్టుబడి ఉన్నారు.",
    image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800&q=80",
    content: "Representatives from 195 countries have agreed to a groundbreaking climate accord that aims to limit global warming to 1.5 degrees Celsius. The agreement includes provisions for developed nations to provide $200 billion annually to help developing countries transition to clean energy. Major polluters have committed to achieving net-zero emissions by 2050.",
    contentTe: "195 దేశాల ప్రతినిధులు గ్లోబల్ వార్మింగ్‌ను 1.5 డిగ్రీల సెల్సియస్‌కు పరిమితం చేయాలనే లక్ష్యంతో ఒక ప్రారంభ వాతావరణ ఒప్పందానికి అంగీకరించారు.",
    date: "2025-01-02"
  },
  {
    id: 5,
    category: "Sports",
    title: "Cricket Team Wins Series Against Australia",
    titleTe: "ఆస్ట్రేలియాపై సిరీస్ గెలిచిన క్రికెట్ జట్టు",
    summary: "India secures a dominant 3-1 series victory in the highly anticipated test series.",
    summaryTe: "ఆసక్తికరమైన టెస్ట్ సిరీస్‌లో భారత్ 3-1తో ఆధిపత్య సిరీస్ విజయాన్ని సాధించింది.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    content: "The Indian cricket team has emerged victorious in the Border-Gavaskar Trophy, defeating Australia 3-1 in their own backyard. The final test saw India chase down a target of 328 runs with remarkable composure. The team captain was named Player of the Series for his outstanding batting performances, scoring 580 runs across five matches.",
    contentTe: "భారత క్రికెట్ జట్టు బోర్డర్-గవాస్కర్ ట్రోఫీలో విజయం సాధించింది, ఆస్ట్రేలియాను వారి స్వంత గడ్డపై 3-1తో ఓడించింది. చివరి టెస్టులో భారత్ 328 పరుగుల లక్ష్యాన్ని అద్భుతమైన సంయమనంతో ఛేదించింది.",
    date: "2025-01-01"
  },
  {
    id: 6,
    category: "Entertainment",
    title: "Blockbuster Movie Breaks Box Office Records",
    titleTe: "బ్లాక్‌బస్టర్ సినిమా బాక్సాఫీస్ రికార్డులను బద్దలు కొట్టింది",
    summary: "The latest superhero film earns over $500 million globally in its opening weekend.",
    summaryTe: "తాజా సూపర్‌హీరో చిత్రం ప్రారంభ వారాంతంలో ప్రపంచవ్యాప్తంగా $500 మిలియన్ల కంటే ఎక్కువ సంపాదించింది.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    content: "The highly anticipated superhero sequel has shattered box office expectations, earning $520 million worldwide in just three days. The film has received praise from critics and audiences alike for its stunning visual effects, compelling storyline, and stellar performances. Industry analysts predict the movie could become one of the highest-grossing films of all time.",
    contentTe: "ఎంతో ఆశించిన సూపర్‌హీరో సీక్వెల్ బాక్సాఫీస్ అంచనాలను తుడిచిపెట్టింది, కేవలం మూడు రోజుల్లో ప్రపంచవ్యాప్తంగా $520 మిలియన్లు సంపాదించింది.",
    date: "2024-12-31"
  },
  {
    id: 7,
    category: "Technology",
    title: "AI Breakthrough Revolutionizes Healthcare",
    titleTe: "AI పురోగతి ఆరోగ్య సంరక్షణలో విప్లవం తెస్తోంది",
    summary: "New artificial intelligence system can detect diseases with 99% accuracy, transforming early diagnosis.",
    summaryTe: "కొత్త కృత్రిమ మేధస్సు వ్యవస్థ 99% ఖచ్చితత్వంతో వ్యాధులను గుర్తించగలదు, ముందస్తు రోగనిర్ధారణను మారుస్తోంది.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    content: "Researchers have unveiled an AI system capable of detecting multiple types of cancer and heart conditions with unprecedented accuracy. The technology analyzes medical imaging and patient data to identify potential health issues before symptoms appear. Major hospitals are already piloting the system, with early results showing significant improvements in patient outcomes.",
    contentTe: "పరిశోధకులు అనేక రకాల క్యాన్సర్ మరియు గుండె పరిస్థితులను అపూర్వమైన ఖచ్చితత్వంతో గుర్తించగల AI వ్యవస్థను ఆవిష్కరించారు. ఈ టెక్నాలజీ లక్షణాలు కనిపించే ముందే సంభావ్య ఆరోగ్య సమస్యలను గుర్తించడానికి వైద్య ఇమేజింగ్ మరియు రోగి డేటాను విశ్లేషిస్తుంది.",
    date: "2024-12-30"
  },
  {
    id: 8,
    category: "Local",
    title: "Historic Temple Restoration Completed",
    titleTe: "చారిత్రాత్మక ఆలయ పునరుద్ధరణ పూర్తయింది",
    summary: "The 800-year-old temple reopens after a two-year comprehensive restoration project.",
    summaryTe: "రెండు సంవత్సరాల సమగ్ర పునరుద్ధరణ ప్రాజెక్ట్ తర్వాత 800 ఏళ్ల పురాతన ఆలయం తిరిగి తెరుచుకుంది.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    content: "The ancient temple, a masterpiece of classical architecture, has been meticulously restored to its former glory. The restoration team used traditional techniques and materials to preserve the temple's authenticity while ensuring structural stability. The project also uncovered several previously unknown inscriptions that provide new insights into the region's history.",
    contentTe: "శాస్త్రీయ వాస్తుశిల్పం యొక్క మాస్టర్‌పీస్ అయిన ప్రాచీన ఆలయాన్ని దాని పూర్వ వైభవానికి ఎంతో జాగ్రత్తగా పునరుద్ధరించారు. నిర్మాణ స్థిరత్వాన్ని నిర్ధారిస్తూ ఆలయం యొక్క ప్రామాణికతను కాపాడటానికి పునరుద్ధరణ బృందం సాంప్రదాయ పద్ధతులు మరియు పదార్థాలను ఉపయోగించింది.",
    date: "2024-12-29"
  },
  {
    id: 9,
    category: "State",
    title: "New Industrial Corridor to Create 50,000 Jobs",
    titleTe: "కొత్త పారిశ్రామిక కారిడార్ 50,000 ఉద్యోగాలను సృష్టిస్తుంది",
    summary: "State government approves major infrastructure project connecting key manufacturing hubs.",
    summaryTe: "ప్రధాన తయారీ హబ్‌లను అనుసంధానం చేసే పెద్ద మౌలిక సదుపాయాల ప్రాజెక్ట్‌ను రాష్ట్ర ప్రభుత్వం ఆమోదించింది.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    content: "The ambitious industrial corridor project has received final approval from the state cabinet. The 200-kilometer corridor will connect three major cities and feature advanced logistics facilities, dedicated freight corridors, and smart city infrastructure. Officials estimate the project will attract investments worth $10 billion and create 50,000 direct jobs over the next five years.",
    contentTe: "ఆశయాత్మక పారిశ్రామిక కారిడార్ ప్రాజెక్ట్ రాష్ట్ర మంత్రివర్గం నుండి తుది ఆమోదం పొందింది. 200 కిలోమీటర్ల కారిడార్ మూడు ప్రధాన నగరాలను అనుసంధానం చేస్తుంది మరియు అధునాతన లాజిస్టిక్స్ సదుపాయాలు, ప్రత్యేక సరుకు రవాణా కారిడార్లు మరియు స్మార్ట్ సిటీ మౌలిక సదుపాయాలను కలిగి ఉంటుంది.",
    date: "2024-12-28"
  },
  {
    id: 10,
    category: "National",
    title: "Space Agency Announces Mars Mission Timeline",
    titleTe: "అంతరిక్ష సంస్థ మార్స్ మిషన్ టైమ్‌లైన్‌ను ప్రకటించింది",
    summary: "India's space agency reveals plans for an unmanned Mars exploration mission by 2028.",
    summaryTe: "భారత అంతరిక్ష సంస్థ 2028 నాటికి మానవరహిత మార్స్ అన్వేషణ మిషన్ ప్రణాళికలను వెల్లడించింది.",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
    content: "India's space agency has unveiled an ambitious timeline for its second Mars mission, building on the success of the 2013 Mangalyaan mission. The new mission will include a sophisticated rover capable of conducting detailed geological surveys and searching for signs of past microbial life. The agency is also developing new propulsion technology that will reduce the journey time significantly.",
    contentTe: "భారత అంతరిక్ష సంస్థ 2013 మంగళయాన్ మిషన్ విజయంపై నిర్మించుకుంటూ తన రెండవ మార్స్ మిషన్ కోసం ఆశయాత్మక టైమ్‌లైన్‌ను ఆవిష్కరించింది.",
    date: "2024-12-27"
  },
  {
    id: 11,
    category: "Sports",
    title: "Young Tennis Star Wins First Grand Slam",
    titleTe: "యువ టెన్నిస్ స్టార్ మొదటి గ్రాండ్ స్లామ్ గెలిచారు",
    summary: "18-year-old sensation defeats world number one in thrilling five-set final.",
    summaryTe: "18 ఏళ్ల సంచలనం రోమాంచకరమైన ఐదు సెట్ల ఫైనల్‌లో ప్రపంచ నంబర్ వన్‌ను ఓడించారు.",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
    content: "In a match that will be remembered for generations, the teenage prodigy overcame a two-set deficit to claim a historic Grand Slam victory. The young champion displayed remarkable mental fortitude, saving multiple match points before securing the title in a nerve-wracking fifth set tiebreak. The victory makes them the youngest Grand Slam champion in over two decades.",
    contentTe: "తరతరాలుగా గుర్తుంచుకునే మ్యాచ్‌లో, టీనేజ్ ప్రాడిజీ రెండు సెట్ల లోటును అధిగమించి చారిత్రాత్మక గ్రాండ్ స్లామ్ విజయాన్ని సాధించారు.",
    date: "2024-12-26"
  },
  {
    id: 12,
    category: "Technology",
    title: "Electric Vehicle Sales Surge 150%",
    titleTe: "ఎలక్ట్రిక్ వాహన అమ్మకాలు 150% పెరిగాయి",
    summary: "India becomes the world's third-largest EV market as adoption accelerates.",
    summaryTe: "వాడుక వేగవంతం కావడంతో భారతదేశం ప్రపంచంలో మూడవ అతిపెద్ద EV మార్కెట్‌గా మారింది.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    content: "Electric vehicle sales in India have surged by 150% compared to last year, driven by falling battery costs, expanded charging infrastructure, and generous government incentives. Industry experts predict that EVs will account for 30% of all new vehicle sales by 2030. Major automakers are racing to introduce affordable electric models to capture this growing market.",
    contentTe: "భారతదేశంలో ఎలక్ట్రిక్ వాహన అమ్మకాలు గత సంవత్సరంతో పోలిస్తే 150% పెరిగాయి, బ్యాటరీ ఖర్చులు తగ్గడం, విస్తరించిన ఛార్జింగ్ మౌలిక సదుపాయాలు మరియు ఉదారమైన ప్రభుత్వ ప్రోత్సాహకాలు దీనికి కారణం.",
    date: "2024-12-25"
  }
];

export const categories = [
  { id: 'home', label: 'Home', labelTe: 'హోమ్' },
  { id: 'local', label: 'Local', labelTe: 'స్థానిక' },
  { id: 'state', label: 'State', labelTe: 'రాష్ట్రం' },
  { id: 'national', label: 'National', labelTe: 'జాతీయ' },
  { id: 'international', label: 'International', labelTe: 'అంతర్జాతీయ' },
  { id: 'sports', label: 'Sports', labelTe: 'క్రీడలు' },
  { id: 'entertainment', label: 'Entertainment', labelTe: 'వినోదం' },
  { id: 'technology', label: 'Technology', labelTe: 'టెక్నాలజీ' },
];
