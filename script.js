// Global variables
let currentUser = {
    name: 'User',
    avatar: 'U'
};

// User data storage
let userData = {
    activities: [],
    moods: [],
    habits: [],
    sleepData: []
};

let posts = [
    {
        id: 1,
        author: 'Dr. Sarah Johnson',
        avatar: 'SJ',
        content: 'Just completed a 5K run! Feeling energized and ready to tackle the day. Remember, consistency is key to building healthy habits. What are your fitness goals for this week?',
        image: null,
        likes: 12,
        liked: false,
        time: '2 hours ago',
        comments: [
            {
                author: 'Mike Chen',
                avatar: 'MC',
                text: 'Great job! I\'m aiming for 3 runs this week.',
                time: '1 hour ago'
            }
        ]
    },
    {
        id: 2,
        author: 'Health Enthusiast',
        avatar: 'HE',
        content: 'Sharing my morning smoothie recipe: spinach, banana, blueberries, and almond milk. Packed with antioxidants and keeps me full until lunch!',
        image: null,
        likes: 8,
        liked: false,
        time: '4 hours ago',
        comments: []
    }
];

let diseases = [
    // Infectious Diseases
    {
        id: 1,
        name: 'Influenza (Flu)',
        type: 'infectious',
        symptoms: ['Fever', 'Cough', 'Sore throat', 'Runny nose', 'Body aches', 'Fatigue', 'Chills', 'Headache'],
        causes: ['Influenza viruses A, B, and C', 'Airborne transmission', 'Contact with infected surfaces'],
        transmission: ['Droplets from coughs and sneezes', 'Direct contact with infected person', 'Touching contaminated surfaces'],
        prevention: ['Annual flu vaccination', 'Frequent hand washing', 'Avoid close contact with sick people', 'Stay home when sick'],
        treatment: ['Rest and fluids', 'Antiviral medications', 'Over-the-counter pain relievers', 'Seek medical attention if severe']
    },
    {
        id: 2,
        name: 'COVID-19',
        type: 'infectious',
        symptoms: ['Fever', 'Dry cough', 'Shortness of breath', 'Loss of taste/smell', 'Fatigue', 'Body aches', 'Sore throat', 'Congestion'],
        causes: ['SARS-CoV-2 virus', 'Airborne transmission', 'Contact with infected surfaces'],
        transmission: ['Respiratory droplets', 'Aerosol transmission', 'Surface contact', 'Close personal contact'],
        prevention: ['Vaccination', 'Mask wearing', 'Social distancing', 'Hand hygiene', 'Ventilation'],
        treatment: ['Rest and isolation', 'Symptomatic treatment', 'Antiviral medications', 'Hospital care if severe']
    },
    {
        id: 3,
        name: 'Common Cold',
        type: 'infectious',
        symptoms: ['Runny nose', 'Sneezing', 'Sore throat', 'Cough', 'Mild fever', 'Congestion', 'Watery eyes'],
        causes: ['Rhinoviruses', 'Coronaviruses', 'Adenoviruses', 'Respiratory syncytial virus'],
        transmission: ['Airborne droplets', 'Direct contact', 'Contaminated surfaces', 'Hand-to-hand contact'],
        prevention: ['Hand washing', 'Avoid touching face', 'Stay away from sick people', 'Good hygiene practices'],
        treatment: ['Rest and fluids', 'Over-the-counter medications', 'Symptom relief', 'Time (usually resolves in 7-10 days)']
    },
    {
        id: 4,
        name: 'Tuberculosis (TB)',
        type: 'infectious',
        symptoms: ['Persistent cough', 'Chest pain', 'Coughing up blood', 'Fatigue', 'Fever', 'Night sweats', 'Weight loss'],
        causes: ['Mycobacterium tuberculosis bacteria', 'Airborne transmission', 'Weakened immune system'],
        transmission: ['Airborne droplets from coughs', 'Close contact with infected person', 'Not spread by casual contact'],
        prevention: ['BCG vaccination', 'Avoid close contact with TB patients', 'Good ventilation', 'Early detection and treatment'],
        treatment: ['Long-term antibiotic treatment', 'Directly Observed Therapy (DOT)', 'Regular monitoring', 'Contact tracing']
    },
    {
        id: 5,
        name: 'Hepatitis A',
        type: 'infectious',
        symptoms: ['Fatigue', 'Nausea', 'Abdominal pain', 'Jaundice', 'Dark urine', 'Clay-colored stool', 'Fever'],
        causes: ['Hepatitis A virus', 'Contaminated food or water', 'Poor sanitation'],
        transmission: ['Fecal-oral route', 'Contaminated food/water', 'Close personal contact', 'Sexual contact'],
        prevention: ['Hepatitis A vaccination', 'Good hand hygiene', 'Safe food handling', 'Avoid contaminated water'],
        treatment: ['Rest and fluids', 'Avoid alcohol', 'Symptomatic treatment', 'Most people recover completely']
    },
    {
        id: 6,
        name: 'Hepatitis B',
        type: 'infectious',
        symptoms: ['Fatigue', 'Nausea', 'Abdominal pain', 'Jaundice', 'Dark urine', 'Joint pain', 'Fever'],
        causes: ['Hepatitis B virus', 'Blood and body fluids', 'Mother-to-child transmission'],
        transmission: ['Blood contact', 'Sexual contact', 'Sharing needles', 'Mother to baby during birth'],
        prevention: ['Hepatitis B vaccination', 'Safe sex practices', 'Avoid sharing needles', 'Universal precautions'],
        treatment: ['Antiviral medications', 'Regular monitoring', 'Liver function tests', 'Vaccination of contacts']
    },
    {
        id: 7,
        name: 'Malaria',
        type: 'infectious',
        symptoms: ['High fever', 'Chills', 'Sweating', 'Headache', 'Nausea', 'Vomiting', 'Muscle pain', 'Fatigue'],
        causes: ['Plasmodium parasites', 'Anopheles mosquito bites', 'Tropical/subtropical regions'],
        transmission: ['Mosquito bites', 'Blood transfusion', 'Organ transplant', 'Mother to baby'],
        prevention: ['Antimalarial medications', 'Mosquito nets', 'Insect repellent', 'Long-sleeved clothing'],
        treatment: ['Antimalarial drugs', 'Supportive care', 'Hospitalization if severe', 'Early diagnosis crucial']
    },
    {
        id: 8,
        name: 'Cholera',
        type: 'infectious',
        symptoms: ['Severe diarrhea', 'Vomiting', 'Dehydration', 'Rapid heart rate', 'Low blood pressure', 'Muscle cramps'],
        causes: ['Vibrio cholerae bacteria', 'Contaminated water', 'Poor sanitation'],
        transmission: ['Contaminated water', 'Contaminated food', 'Fecal-oral route', 'Poor hygiene'],
        prevention: ['Safe water and food', 'Good sanitation', 'Hand washing', 'Oral cholera vaccine'],
        treatment: ['Oral rehydration therapy', 'Intravenous fluids', 'Antibiotics', 'Zinc supplements']
    },
    {
        id: 9,
        name: 'Measles',
        type: 'infectious',
        symptoms: ['High fever', 'Cough', 'Runny nose', 'Red eyes', 'Rash', 'Koplik spots', 'Sore throat'],
        causes: ['Measles virus', 'Highly contagious', 'Airborne transmission'],
        transmission: ['Airborne droplets', 'Direct contact', 'Highly contagious', 'Can survive in air for hours'],
        prevention: ['MMR vaccination', 'Avoid contact with infected', 'Isolation of cases', 'Herd immunity'],
        treatment: ['Supportive care', 'Vitamin A supplements', 'Fever reducers', 'Rest and fluids']
    },
    {
        id: 10,
        name: 'Chickenpox',
        type: 'infectious',
        symptoms: ['Itchy rash', 'Fever', 'Headache', 'Loss of appetite', 'Tiredness', 'Blisters', 'Scabs'],
        causes: ['Varicella-zoster virus', 'Highly contagious', 'Airborne transmission'],
        transmission: ['Airborne droplets', 'Direct contact with rash', 'Touching contaminated surfaces'],
        prevention: ['Varicella vaccination', 'Avoid contact with infected', 'Good hygiene', 'Isolation of cases'],
        treatment: ['Calamine lotion', 'Antihistamines', 'Fever reducers', 'Antiviral drugs if severe']
    },

    // Chronic Diseases
    {
        id: 11,
        name: 'Diabetes Type 1',
        type: 'chronic',
        symptoms: ['Increased thirst', 'Frequent urination', 'Extreme hunger', 'Weight loss', 'Fatigue', 'Blurred vision'],
        causes: ['Autoimmune destruction of insulin-producing cells', 'Genetic factors', 'Environmental triggers'],
        transmission: ['Not contagious', 'Autoimmune condition', 'Genetic predisposition'],
        prevention: ['No known prevention', 'Early detection', 'Genetic counseling', 'Research ongoing'],
        treatment: ['Insulin therapy', 'Blood glucose monitoring', 'Carbohydrate counting', 'Regular exercise']
    },
    {
        id: 12,
        name: 'Diabetes Type 2',
        type: 'chronic',
        symptoms: ['Increased thirst', 'Frequent urination', 'Extreme fatigue', 'Blurred vision', 'Slow healing wounds', 'Weight gain'],
        causes: ['Insulin resistance', 'Genetic factors', 'Obesity', 'Physical inactivity', 'Poor diet'],
        transmission: ['Not contagious', 'Hereditary component', 'Lifestyle factors'],
        prevention: ['Maintain healthy weight', 'Regular exercise', 'Balanced diet', 'Regular health checkups'],
        treatment: ['Blood sugar monitoring', 'Medications', 'Dietary changes', 'Regular exercise', 'Insulin therapy if needed']
    },
    {
        id: 13,
        name: 'Hypertension',
        type: 'chronic',
        symptoms: ['Often asymptomatic', 'Headaches', 'Shortness of breath', 'Nosebleeds', 'Dizziness', 'Chest pain'],
        causes: ['High sodium intake', 'Obesity', 'Lack of exercise', 'Stress', 'Genetics', 'Age'],
        transmission: ['Not contagious', 'Hereditary factors', 'Lifestyle related'],
        prevention: ['Low sodium diet', 'Regular exercise', 'Weight management', 'Stress reduction', 'Limit alcohol'],
        treatment: ['Lifestyle modifications', 'Blood pressure medications', 'Regular monitoring', 'Dietary changes']
    },
    {
        id: 14,
        name: 'Heart Disease',
        type: 'chronic',
        symptoms: ['Chest pain', 'Shortness of breath', 'Fatigue', 'Irregular heartbeat', 'Swelling in legs', 'Dizziness'],
        causes: ['Atherosclerosis', 'High cholesterol', 'Smoking', 'Diabetes', 'High blood pressure', 'Family history'],
        transmission: ['Not contagious', 'Hereditary factors', 'Lifestyle related'],
        prevention: ['Healthy diet', 'Regular exercise', 'No smoking', 'Manage blood pressure', 'Control cholesterol'],
        treatment: ['Medications', 'Lifestyle changes', 'Surgery if needed', 'Cardiac rehabilitation', 'Regular monitoring']
    },
    {
        id: 15,
        name: 'Asthma',
        type: 'chronic',
        symptoms: ['Wheezing', 'Shortness of breath', 'Chest tightness', 'Coughing', 'Difficulty breathing', 'Rapid breathing'],
        causes: ['Airway inflammation', 'Environmental triggers', 'Allergies', 'Genetics', 'Respiratory infections'],
        transmission: ['Not contagious', 'Hereditary component', 'Environmental factors'],
        prevention: ['Avoid triggers', 'Regular medication', 'Allergy management', 'Good indoor air quality'],
        treatment: ['Inhalers', 'Long-term control medications', 'Quick-relief medications', 'Allergy shots']
    },
    {
        id: 16,
        name: 'Chronic Obstructive Pulmonary Disease (COPD)',
        type: 'chronic',
        symptoms: ['Shortness of breath', 'Chronic cough', 'Wheezing', 'Chest tightness', 'Frequent respiratory infections'],
        causes: ['Smoking', 'Air pollution', 'Occupational exposure', 'Genetics', 'Age'],
        transmission: ['Not contagious', 'Lifestyle related', 'Environmental factors'],
        prevention: ['No smoking', 'Avoid air pollution', 'Protective equipment at work', 'Regular exercise'],
        treatment: ['Bronchodilators', 'Inhaled steroids', 'Oxygen therapy', 'Pulmonary rehabilitation']
    },
    {
        id: 17,
        name: 'Arthritis',
        type: 'chronic',
        symptoms: ['Joint pain', 'Stiffness', 'Swelling', 'Reduced range of motion', 'Fatigue', 'Morning stiffness'],
        causes: ['Joint inflammation', 'Autoimmune factors', 'Wear and tear', 'Genetics', 'Age'],
        transmission: ['Not contagious', 'Hereditary factors', 'Autoimmune component'],
        prevention: ['Maintain healthy weight', 'Regular exercise', 'Joint protection', 'Early treatment'],
        treatment: ['Pain medications', 'Anti-inflammatory drugs', 'Physical therapy', 'Joint replacement if severe']
    },
    {
        id: 18,
        name: 'Osteoporosis',
        type: 'chronic',
        symptoms: ['Often asymptomatic', 'Bone fractures', 'Loss of height', 'Stooped posture', 'Back pain'],
        causes: ['Bone density loss', 'Age', 'Hormonal changes', 'Calcium deficiency', 'Lack of exercise'],
        transmission: ['Not contagious', 'Hereditary factors', 'Lifestyle related'],
        prevention: ['Adequate calcium intake', 'Vitamin D', 'Weight-bearing exercise', 'No smoking'],
        treatment: ['Calcium supplements', 'Vitamin D', 'Bisphosphonates', 'Hormone therapy', 'Exercise']
    },

    // Autoimmune Diseases
    {
        id: 19,
        name: 'Rheumatoid Arthritis',
        type: 'autoimmune',
        symptoms: ['Joint pain and swelling', 'Morning stiffness', 'Fatigue', 'Fever', 'Weight loss', 'Joint deformity'],
        causes: ['Autoimmune attack on joints', 'Genetic factors', 'Environmental triggers', 'Hormonal factors'],
        transmission: ['Not contagious', 'Autoimmune condition', 'Genetic predisposition'],
        prevention: ['No known prevention', 'Early detection', 'Genetic counseling', 'Lifestyle factors'],
        treatment: ['Disease-modifying drugs', 'Anti-inflammatory medications', 'Physical therapy', 'Surgery if severe']
    },
    {
        id: 20,
        name: 'Lupus',
        type: 'autoimmune',
        symptoms: ['Butterfly rash', 'Joint pain', 'Fatigue', 'Fever', 'Hair loss', 'Sensitivity to sun', 'Chest pain'],
        causes: ['Autoimmune attack on healthy tissues', 'Genetic factors', 'Environmental triggers', 'Hormonal factors'],
        transmission: ['Not contagious', 'Autoimmune condition', 'Genetic predisposition'],
        prevention: ['No known prevention', 'Sun protection', 'Stress management', 'Regular monitoring'],
        treatment: ['Anti-inflammatory drugs', 'Immunosuppressants', 'Antimalarial drugs', 'Corticosteroids']
    },
    {
        id: 21,
        name: 'Multiple Sclerosis (MS)',
        type: 'autoimmune',
        symptoms: ['Numbness', 'Weakness', 'Vision problems', 'Balance issues', 'Fatigue', 'Cognitive problems'],
        causes: ['Autoimmune attack on nerve cells', 'Genetic factors', 'Environmental triggers', 'Vitamin D deficiency'],
        transmission: ['Not contagious', 'Autoimmune condition', 'Genetic predisposition'],
        prevention: ['No known prevention', 'Vitamin D', 'Healthy lifestyle', 'Early detection'],
        treatment: ['Disease-modifying therapies', 'Symptom management', 'Physical therapy', 'Occupational therapy']
    },
    {
        id: 22,
        name: 'Crohn\'s Disease',
        type: 'autoimmune',
        symptoms: ['Abdominal pain', 'Diarrhea', 'Weight loss', 'Fatigue', 'Fever', 'Blood in stool'],
        causes: ['Autoimmune inflammation of digestive tract', 'Genetic factors', 'Environmental triggers'],
        transmission: ['Not contagious', 'Autoimmune condition', 'Genetic predisposition'],
        prevention: ['No known prevention', 'Diet management', 'Stress reduction', 'Regular monitoring'],
        treatment: ['Anti-inflammatory drugs', 'Immunosuppressants', 'Surgery if severe', 'Dietary modifications']
    },
    {
        id: 23,
        name: 'Psoriasis',
        type: 'autoimmune',
        symptoms: ['Red, scaly patches', 'Itching', 'Burning', 'Thickened nails', 'Joint pain', 'Dry skin'],
        causes: ['Autoimmune skin condition', 'Genetic factors', 'Environmental triggers', 'Stress'],
        transmission: ['Not contagious', 'Autoimmune condition', 'Genetic predisposition'],
        prevention: ['No known prevention', 'Stress management', 'Skin care', 'Avoid triggers'],
        treatment: ['Topical treatments', 'Light therapy', 'Systemic medications', 'Biologic drugs']
    },

    // Genetic Diseases
    {
        id: 24,
        name: 'Cystic Fibrosis',
        type: 'genetic',
        symptoms: ['Persistent cough', 'Wheezing', 'Frequent lung infections', 'Poor growth', 'Salty-tasting skin'],
        causes: ['CFTR gene mutation', 'Inherited condition', 'Affects mucus production'],
        transmission: ['Inherited from both parents', 'Autosomal recessive', 'Not contagious'],
        prevention: ['Genetic counseling', 'Carrier testing', 'Prenatal testing', 'Family planning'],
        treatment: ['Airway clearance techniques', 'Medications', 'Nutritional support', 'Lung transplant if severe']
    },
    {
        id: 25,
        name: 'Sickle Cell Disease',
        type: 'genetic',
        symptoms: ['Pain crises', 'Fatigue', 'Shortness of breath', 'Delayed growth', 'Frequent infections'],
        causes: ['Hemoglobin gene mutation', 'Inherited condition', 'Abnormal red blood cells'],
        transmission: ['Inherited from both parents', 'Autosomal recessive', 'Not contagious'],
        prevention: ['Genetic counseling', 'Carrier testing', 'Prenatal testing', 'Family planning'],
        treatment: ['Pain management', 'Blood transfusions', 'Hydroxyurea', 'Bone marrow transplant']
    },
    {
        id: 26,
        name: 'Huntington\'s Disease',
        type: 'genetic',
        symptoms: ['Involuntary movements', 'Cognitive decline', 'Behavioral changes', 'Difficulty walking', 'Speech problems'],
        causes: ['HTT gene mutation', 'Inherited condition', 'Progressive brain disorder'],
        transmission: ['Inherited from parent', 'Autosomal dominant', 'Not contagious'],
        prevention: ['Genetic counseling', 'Genetic testing', 'Family planning', 'No known prevention'],
        treatment: ['Symptom management', 'Physical therapy', 'Occupational therapy', 'Speech therapy']
    },
    {
        id: 27,
        name: 'Hemophilia',
        type: 'genetic',
        symptoms: ['Excessive bleeding', 'Bruising', 'Joint pain', 'Blood in urine/stool', 'Nosebleeds'],
        causes: ['Clotting factor deficiency', 'Inherited condition', 'X-linked recessive'],
        transmission: ['Inherited from mother', 'X-linked recessive', 'Not contagious'],
        prevention: ['Genetic counseling', 'Carrier testing', 'Prenatal testing', 'Family planning'],
        treatment: ['Clotting factor replacement', 'Desmopressin', 'Antifibrinolytic drugs', 'Physical therapy']
    },

    // Mental Health Conditions
    {
        id: 28,
        name: 'Depression',
        type: 'mental',
        symptoms: ['Persistent sadness', 'Loss of interest', 'Fatigue', 'Sleep problems', 'Appetite changes', 'Concentration difficulties'],
        causes: ['Biological factors', 'Genetic predisposition', 'Life events', 'Chemical imbalances'],
        transmission: ['Not contagious', 'Hereditary component', 'Environmental factors'],
        prevention: ['Stress management', 'Social support', 'Regular exercise', 'Early intervention'],
        treatment: ['Psychotherapy', 'Antidepressants', 'Lifestyle changes', 'Support groups']
    },
    {
        id: 29,
        name: 'Anxiety Disorders',
        type: 'mental',
        symptoms: ['Excessive worry', 'Restlessness', 'Fatigue', 'Concentration problems', 'Irritability', 'Sleep disturbances'],
        causes: ['Genetic factors', 'Brain chemistry', 'Life events', 'Personality traits'],
        transmission: ['Not contagious', 'Hereditary component', 'Environmental factors'],
        prevention: ['Stress management', 'Relaxation techniques', 'Regular exercise', 'Early intervention'],
        treatment: ['Psychotherapy', 'Medications', 'Relaxation techniques', 'Lifestyle changes']
    },
    {
        id: 30,
        name: 'Bipolar Disorder',
        type: 'mental',
        symptoms: ['Mood swings', 'Manic episodes', 'Depressive episodes', 'Irritability', 'Sleep problems', 'Racing thoughts'],
        causes: ['Biological factors', 'Genetic predisposition', 'Brain structure', 'Chemical imbalances'],
        transmission: ['Not contagious', 'Strong hereditary component', 'Environmental triggers'],
        prevention: ['No known prevention', 'Early detection', 'Stress management', 'Regular treatment'],
        treatment: ['Mood stabilizers', 'Psychotherapy', 'Lifestyle management', 'Support systems']
    }
];

let affirmations = [
    "Nothing is made for nothing - every step forward is progress.",
    "Your health is your greatest wealth.",
    "Small steps every day lead to big changes.",
    "You are stronger than you think and more capable than you imagine.",
    "Every healthy choice you make is a gift to your future self.",
    "Progress, not perfection, is the goal.",
    "Your body is your temple - treat it with love and respect.",
    "Today is a new opportunity to make healthy choices.",
    "You have the power to transform your health, one day at a time.",
    "Believe in yourself and your ability to achieve your health goals."
];

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeDashboard();
    initializeSanaEdu();
    initializeSanatalk();
    initializeSanaAsk();
    initializeSaname();
    loadAffirmation();
    loadPosts();
    loadDiseases();
});

// Navigation functionality
function initializeNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            showSection(targetSection);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Dashboard functionality
function initializeDashboard() {
    const dashboardBoxes = document.querySelectorAll('.dashboard-box');
    
    dashboardBoxes.forEach(box => {
        const openBtn = box.querySelector('.open-box-btn');
        openBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const boxType = box.getAttribute('data-box');
            openDashboardBox(boxType);
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal.click();
        }
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Initialize charts
    initializeCharts();
}

function openDashboardBox(boxType) {
    let content = '';
    
    switch(boxType) {
        case 'activity':
            content = `
                <h2>Daily Activity Tracker</h2>
                <form id="activity-form">
                    <div class="form-group">
                        <label for="activity-type">Activity Type:</label>
                        <select id="activity-type" required>
                            <option value="">Select activity</option>
                            <option value="walking">Walking</option>
                            <option value="running">Running</option>
                            <option value="cycling">Cycling</option>
                            <option value="swimming">Swimming</option>
                            <option value="gym">Gym Workout</option>
                            <option value="yoga">Yoga</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="duration">Duration (minutes):</label>
                        <input type="number" id="duration" min="1" max="300" required>
                    </div>
                    <div class="form-group">
                        <label for="intensity">Intensity Level:</label>
                        <select id="intensity" required>
                            <option value="">Select intensity</option>
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="notes">Notes:</label>
                        <textarea id="notes" placeholder="Any additional notes about your activity..."></textarea>
                    </div>
                    <button type="submit" class="btn-primary">Log Activity</button>
                </form>
            `;
            break;
            
        case 'mood':
            content = `
                <h2>Mood Tracker</h2>
                <form id="mood-form">
                    <div class="form-group">
                        <label>How are you feeling today?</label>
                        <div class="mood-options">
                            <input type="radio" id="mood-1" name="mood" value="1">
                            <label for="mood-1">😢 Very Sad</label>
                            
                            <input type="radio" id="mood-2" name="mood" value="2">
                            <label for="mood-2">😞 Sad</label>
                            
                            <input type="radio" id="mood-3" name="mood" value="3">
                            <label for="mood-3">😐 Neutral</label>
                            
                            <input type="radio" id="mood-4" name="mood" value="4">
                            <label for="mood-4">😊 Happy</label>
                            
                            <input type="radio" id="mood-5" name="mood" value="5">
                            <label for="mood-5">😄 Very Happy</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="mood-notes">What's affecting your mood today?</label>
                        <textarea id="mood-notes" placeholder="Describe what's influencing your mood..."></textarea>
                    </div>
                    <div class="form-group">
                        <label for="energy-level">Energy Level (1-10):</label>
                        <input type="range" id="energy-level" min="1" max="10" value="5">
                        <span id="energy-value">5</span>
                    </div>
                    <button type="submit" class="btn-primary">Log Mood</button>
                </form>
            `;
            break;
            
        case 'habits':
            content = `
                <h2>New Habit Tracker</h2>
                <form id="habit-form">
                    <div class="form-group">
                        <label for="habit-name">Habit Name:</label>
                        <input type="text" id="habit-name" placeholder="e.g., Drink 8 glasses of water daily" required>
                    </div>
                    <div class="form-group">
                        <label for="habit-category">Category:</label>
                        <select id="habit-category" required>
                            <option value="">Select category</option>
                            <option value="health">Health</option>
                            <option value="fitness">Fitness</option>
                            <option value="nutrition">Nutrition</option>
                            <option value="mental">Mental Health</option>
                            <option value="sleep">Sleep</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="habit-frequency">Frequency:</label>
                        <select id="habit-frequency" required>
                            <option value="">Select frequency</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="habit-goal">Goal Description:</label>
                        <textarea id="habit-goal" placeholder="Describe your goal and why it's important to you..."></textarea>
                    </div>
                    <button type="submit" class="btn-primary">Create Habit</button>
                </form>
            `;
            break;
            
        case 'sleep':
            content = `
                <h2>Sleep Tracker</h2>
                <form id="sleep-form">
                    <div class="form-group">
                        <label for="sleep-duration">Sleep Duration (hours):</label>
                        <input type="number" id="sleep-duration" min="1" max="24" step="0.5" required>
                    </div>
                    <div class="form-group">
                        <label for="sleep-quality">Sleep Quality:</label>
                        <select id="sleep-quality" required>
                            <option value="">Select quality</option>
                            <option value="1">Very Poor</option>
                            <option value="2">Poor</option>
                            <option value="3">Fair</option>
                            <option value="4">Good</option>
                            <option value="5">Excellent</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="bedtime">Bedtime:</label>
                        <input type="time" id="bedtime" required>
                    </div>
                    <div class="form-group">
                        <label for="wake-time">Wake Time:</label>
                        <input type="time" id="wake-time" required>
                    </div>
                    <div class="form-group">
                        <label for="sleep-notes">Notes:</label>
                        <textarea id="sleep-notes" placeholder="Any notes about your sleep..."></textarea>
                    </div>
                    <button type="submit" class="btn-primary">Log Sleep</button>
                </form>
            `;
            break;
            
        case 'summary':
            const weeklyActivities = userData.activities.filter(activity => {
                const activityDate = new Date(activity.date);
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                return activityDate >= weekAgo;
            }).length;
            
            const averageMood = userData.moods.length > 0 ? 
                (userData.moods.reduce((sum, mood) => sum + mood.mood, 0) / userData.moods.length).toFixed(1) : '0';
            
            const activeHabits = userData.habits.length;
            
            content = `
                <h2>Health Summary</h2>
                <div class="summary-stats">
                    <div class="stat-card">
                        <h3>Activities This Week</h3>
                        <p class="stat-number">${weeklyActivities}</p>
                        <p class="stat-label">Total Activities</p>
                    </div>
                    <div class="stat-card">
                        <h3>Average Mood</h3>
                        <p class="stat-number">${averageMood}</p>
                        <p class="stat-label">Out of 5</p>
                    </div>
                    <div class="stat-card">
                        <h3>Active Habits</h3>
                        <p class="stat-number">${activeHabits}</p>
                        <p class="stat-label">Habits Tracked</p>
                    </div>
                </div>
                <div class="summary-insights">
                    <h3>Insights</h3>
                    <ul>
                        <li>${weeklyActivities > 0 ? 'Great job staying active this week!' : 'Try to add some physical activities to your routine.'}</li>
                        <li>${parseFloat(averageMood) >= 4 ? 'Your mood has been positive lately!' : 'Consider activities that boost your mood.'}</li>
                        <li>${activeHabits > 0 ? 'Keep up the good work with your habits!' : 'Start tracking some healthy habits.'}</li>
                    </ul>
                </div>
            `;
            break;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    
    // Add event listeners for form submissions
    setTimeout(() => {
        const forms = modalBody.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', handleFormSubmission);
        });
        
        // Handle energy level slider
        const energySlider = document.getElementById('energy-level');
        const energyValue = document.getElementById('energy-value');
        if (energySlider && energyValue) {
            energySlider.addEventListener('input', function() {
                energyValue.textContent = this.value;
            });
        }
    }, 100);
}

function handleFormSubmission(e) {
    e.preventDefault();
    const formId = e.target.id;
    
    switch(formId) {
        case 'activity-form':
            const activityData = {
                type: document.getElementById('activity-type').value,
                duration: parseInt(document.getElementById('duration').value),
                intensity: document.getElementById('intensity').value,
                notes: document.getElementById('notes').value,
                date: new Date().toISOString()
            };
            userData.activities.push(activityData);
            saveUserData();
            updateActivityChart();
            console.log('Activity logged:', activityData);
            showNotification('Activity logged successfully!');
            break;
            
        case 'mood-form':
            const moodData = {
                mood: parseInt(document.querySelector('input[name="mood"]:checked')?.value),
                notes: document.getElementById('mood-notes').value,
                energy: parseInt(document.getElementById('energy-level').value),
                date: new Date().toISOString()
            };
            userData.moods.push(moodData);
            saveUserData();
            updateMoodChart();
            console.log('Mood logged:', moodData);
            showNotification('Mood logged successfully!');
            break;
            
        case 'habit-form':
            const habitData = {
                name: document.getElementById('habit-name').value,
                category: document.getElementById('habit-category').value,
                frequency: document.getElementById('habit-frequency').value,
                goal: document.getElementById('habit-goal').value,
                date: new Date().toISOString()
            };
            userData.habits.push(habitData);
            saveUserData();
            console.log('Habit created:', habitData);
            showNotification('Habit created successfully!');
            break;
            
        case 'sleep-form':
            const sleepData = {
                duration: parseFloat(document.getElementById('sleep-duration').value),
                quality: parseInt(document.getElementById('sleep-quality').value),
                bedtime: document.getElementById('bedtime').value,
                wakeTime: document.getElementById('wake-time').value,
                notes: document.getElementById('sleep-notes').value,
                date: new Date().toISOString()
            };
            userData.sleepData.push(sleepData);
            saveUserData();
            updateSleepChart();
            console.log('Sleep logged:', sleepData);
            showNotification('Sleep logged successfully!');
            break;
    }
    
    closeModal.click();
}

function initializeCharts() {
    loadUserData();
    updateActivityChart();
    updateSleepChart();
}

function saveUserData() {
    localStorage.setItem('sanaHubUserData', JSON.stringify(userData));
}

function loadUserData() {
    const savedData = localStorage.getItem('sanaHubUserData');
    if (savedData) {
        userData = JSON.parse(savedData);
    }
}

function updateActivityChart() {
    const activityCtx = document.getElementById('activityChart');
    if (!activityCtx) return;
    
    // Get last 7 days of activity data
    const last7Days = getLast7Days();
    const activityData = last7Days.map(date => {
        const dayActivities = userData.activities.filter(activity => 
            new Date(activity.date).toDateString() === date.toDateString()
        );
        return dayActivities.reduce((total, activity) => total + activity.duration, 0);
    });
    
    const ctx = activityCtx.getContext('2d');
    drawSimpleChart(ctx, activityData, 'Activity Minutes');
}

function updateSleepChart() {
    const sleepCtx = document.getElementById('sleepChart');
    if (!sleepCtx) return;
    
    // Get last 7 days of sleep data
    const last7Days = getLast7Days();
    const sleepData = last7Days.map(date => {
        const daySleep = userData.sleepData.find(sleep => 
            new Date(sleep.date).toDateString() === date.toDateString()
        );
        return daySleep ? daySleep.duration : 0;
    });
    
    const ctx = sleepCtx.getContext('2d');
    drawSimpleChart(ctx, sleepData, 'Sleep Hours');
}

function updateMoodChart() {
    // This would update a mood chart if we had one
    console.log('Mood data updated:', userData.moods);
}

function getLast7Days() {
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        days.push(date);
    }
    return days;
}

function drawSimpleChart(ctx, data, label) {
    const canvas = ctx.canvas;
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.clearRect(0, 0, width, height);
    
    // Draw axes
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, height - 40);
    ctx.lineTo(width - 20, height - 40);
    ctx.moveTo(40, 20);
    ctx.lineTo(40, height - 40);
    ctx.stroke();
    
    // Draw line
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    const stepX = (width - 60) / (data.length - 1);
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const range = maxValue - minValue || 1;
    
    data.forEach((value, index) => {
        const x = 40 + (index * stepX);
        const y = height - 40 - ((value - minValue) / range) * (height - 80);
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw points
    ctx.fillStyle = '#667eea';
    data.forEach((value, index) => {
        const x = 40 + (index * stepX);
        const y = height - 40 - ((value - minValue) / range) * (height - 80);
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
    });
}

// SANAEDU functionality
function initializeSanaEdu() {
    const diseaseTypeFilter = document.getElementById('disease-type');
    const diseaseSearch = document.getElementById('disease-search');
    
    if (diseaseTypeFilter) {
        diseaseTypeFilter.addEventListener('change', filterDiseases);
    }
    
    if (diseaseSearch) {
        diseaseSearch.addEventListener('input', filterDiseases);
    }
}

function loadDiseases() {
    const diseaseGrid = document.getElementById('disease-grid');
    if (!diseaseGrid) return;
    
    diseaseGrid.innerHTML = '';
    
    diseases.forEach(disease => {
        const diseaseCard = createDiseaseCard(disease);
        diseaseGrid.appendChild(diseaseCard);
    });
}

function createDiseaseCard(disease) {
    const card = document.createElement('div');
    card.className = 'disease-card';
    card.innerHTML = `
        <h3>${disease.name}</h3>
        <span class="disease-type">${disease.type.charAt(0).toUpperCase() + disease.type.slice(1)}</span>
        
        <div class="disease-info">
            <h4>Symptoms:</h4>
            <p>${disease.symptoms.join(', ')}</p>
        </div>
        
        <div class="disease-info">
            <h4>Causes:</h4>
            <p>${disease.causes.join(', ')}</p>
        </div>
        
        <div class="disease-info">
            <h4>Transmission:</h4>
            <p>${disease.transmission.join(', ')}</p>
        </div>
        
        <div class="disease-info">
            <h4>Prevention:</h4>
            <p>${disease.prevention.join(', ')}</p>
        </div>
        
        <div class="disease-info">
            <h4>Treatment:</h4>
            <p>${disease.treatment.join(', ')}</p>
        </div>
    `;
    
    return card;
}

function filterDiseases() {
    const typeFilter = document.getElementById('disease-type')?.value || 'all';
    const searchTerm = document.getElementById('disease-search')?.value.toLowerCase() || '';
    
    const filteredDiseases = diseases.filter(disease => {
        const matchesType = typeFilter === 'all' || disease.type === typeFilter;
        const matchesSearch = disease.name.toLowerCase().includes(searchTerm) ||
                            disease.symptoms.some(s => s.toLowerCase().includes(searchTerm));
        return matchesType && matchesSearch;
    });
    
    const diseaseGrid = document.getElementById('disease-grid');
    if (!diseaseGrid) return;
    
    diseaseGrid.innerHTML = '';
    filteredDiseases.forEach(disease => {
        const diseaseCard = createDiseaseCard(disease);
        diseaseGrid.appendChild(diseaseCard);
    });
}

// SANATALK functionality
function initializeSanatalk() {
    const postForm = document.getElementById('post-form');
    const uploadImageBtn = document.getElementById('upload-image');
    const postImageInput = document.getElementById('post-image');
    
    if (postForm) {
        postForm.addEventListener('submit', handlePostSubmission);
    }
    
    if (uploadImageBtn && postImageInput) {
        uploadImageBtn.addEventListener('click', () => postImageInput.click());
        postImageInput.addEventListener('change', handleImageUpload);
    }
}

function loadPosts() {
    const postsFeed = document.getElementById('posts-feed');
    if (!postsFeed) return;
    
    postsFeed.innerHTML = '';
    posts.forEach(post => {
        const postElement = createPostElement(post);
        postsFeed.appendChild(postElement);
    });
}

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post-card';
    postDiv.innerHTML = `
        <div class="post-header">
            <div class="post-avatar">${post.avatar}</div>
            <div>
                <div class="post-author">${post.author}</div>
                <div class="post-time">${post.time}</div>
            </div>
        </div>
        <div class="post-content">${post.content}</div>
        ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ''}
        <div class="post-actions">
            <button class="like-btn ${post.liked ? 'liked' : ''}" onclick="toggleLike(${post.id})">
                <i class="fas fa-heart"></i>
                <span>${post.likes}</span>
            </button>
            <button class="comment-btn" onclick="toggleComments(${post.id})">
                <i class="fas fa-comment"></i>
                <span>${post.comments.length}</span>
            </button>
        </div>
        <div class="comments-section" id="comments-${post.id}" style="display: none;">
            ${post.comments.map(comment => `
                <div class="comment">
                    <div class="comment-avatar">${comment.avatar}</div>
                    <div class="comment-content">
                        <div class="comment-author">${comment.author}</div>
                        <div class="comment-text">${comment.text}</div>
                    </div>
                </div>
            `).join('')}
            <div class="comment-input">
                <input type="text" placeholder="Write a comment..." id="comment-input-${post.id}">
                <button onclick="addComment(${post.id})" class="btn-primary">Post</button>
            </div>
        </div>
    `;
    
    return postDiv;
}

function handlePostSubmission(e) {
    e.preventDefault();
    const content = document.getElementById('post-content').value;
    const image = document.getElementById('post-image').files[0];
    
    if (!content.trim()) return;
    
    const newPost = {
        id: Date.now(),
        author: currentUser.name,
        avatar: currentUser.avatar,
        content: content,
        image: image ? URL.createObjectURL(image) : null,
        likes: 0,
        liked: false,
        time: 'Just now',
        comments: []
    };
    
    posts.unshift(newPost);
    loadPosts();
    document.getElementById('post-form').reset();
    
    showNotification('Post published successfully!');
}

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Image preview could be added here
        };
        reader.readAsDataURL(file);
    }
}

function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    
    if (post.liked) {
        post.likes--;
        post.liked = false;
    } else {
        post.likes++;
        post.liked = true;
    }
    
    loadPosts();
}

function toggleComments(postId) {
    const commentsSection = document.getElementById(`comments-${postId}`);
    if (commentsSection) {
        commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
    }
}

function addComment(postId) {
    const input = document.getElementById(`comment-input-${postId}`);
    const text = input.value.trim();
    
    if (!text) return;
    
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    
    const comment = {
        author: currentUser.name,
        avatar: currentUser.avatar,
        text: text,
        time: 'Just now'
    };
    
    post.comments.push(comment);
    loadPosts();
    input.value = '';
}

// SANAASK functionality
function initializeSanaAsk() {
    const sendSymptomBtn = document.getElementById('send-symptom');
    const symptomInput = document.getElementById('symptom-input');
    
    if (sendSymptomBtn && symptomInput) {
        sendSymptomBtn.addEventListener('click', sendSymptom);
        symptomInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendSymptom();
            }
        });
    }
}

function sendSymptom() {
    const input = document.getElementById('symptom-input');
    const symptoms = input.value.trim();
    
    if (!symptoms) return;
    
    // Add user message
    addChatMessage(symptoms, 'user');
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const aiResponse = generateAIResponse(symptoms);
        addChatMessage(aiResponse, 'ai');
    }, 1000);
}

function addChatMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(symptoms) {
    const symptomKeywords = symptoms.toLowerCase();
    
    // Simple keyword matching for demo purposes
    if (symptomKeywords.includes('fever') && symptomKeywords.includes('cough')) {
        return "Based on your symptoms (fever and cough), this could be influenza (flu) or a common cold. However, it's important to consult with a healthcare professional for proper diagnosis and treatment. Rest, stay hydrated, and monitor your symptoms.";
    } else if (symptomKeywords.includes('headache') && symptomKeywords.includes('dizziness')) {
        return "Headache and dizziness could indicate various conditions including dehydration, low blood pressure, or other issues. I recommend consulting a healthcare provider for proper evaluation, especially if symptoms persist or worsen.";
    } else if (symptomKeywords.includes('stomach') || symptomKeywords.includes('nausea')) {
        return "Stomach-related symptoms could be due to food poisoning, gastroenteritis, or other digestive issues. Stay hydrated, avoid heavy foods, and seek medical attention if symptoms are severe or persistent.";
    } else {
        return "Thank you for describing your symptoms. While I can provide general information, it's important to remember that I cannot replace professional medical advice. Please consult with a healthcare provider for proper diagnosis and treatment. If you're experiencing severe symptoms, seek immediate medical attention.";
    }
}

// SANAME functionality
function initializeSaname() {
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', handleProfileSubmission);
    }
    
    // Load saved profile data
    loadProfileData();
}

function handleProfileSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const profileData = Object.fromEntries(formData.entries());
    
    // Save to localStorage
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    
    // Update current user
    currentUser.name = profileData.name || 'User';
    currentUser.avatar = profileData.name ? profileData.name.charAt(0).toUpperCase() : 'U';
    
    showNotification('Profile saved successfully!');
}

function loadProfileData() {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        const profileData = JSON.parse(savedProfile);
        
        // Populate form fields
        Object.keys(profileData).forEach(key => {
            const field = document.getElementById(key);
            if (field) {
                field.value = profileData[key];
            }
        });
        
        // Update current user
        currentUser.name = profileData.name || 'User';
        currentUser.avatar = profileData.name ? profileData.name.charAt(0).toUpperCase() : 'U';
    }
}

// Utility functions
function loadAffirmation() {
    const affirmationText = document.getElementById('affirmation-text');
    if (affirmationText) {
        const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
        affirmationText.textContent = `"${randomAffirmation}"`;
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #48bb78;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add some CSS for the mood options
const style = document.createElement('style');
style.textContent = `
    .mood-options {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: 0.5rem;
    }
    
    .mood-options input[type="radio"] {
        display: none;
    }
    
    .mood-options label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.2rem;
    }
    
    .mood-options input[type="radio"]:checked + label {
        border-color: #667eea;
        background-color: #f7fafc;
    }
    
    .summary-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }
    
    .stat-card {
        text-align: center;
        padding: 1rem;
        background: #f7fafc;
        border-radius: 8px;
    }
    
    .stat-number {
        font-size: 2rem;
        font-weight: 700;
        color: #667eea;
        margin: 0.5rem 0;
    }
    
    .stat-label {
        color: #718096;
        font-size: 0.9rem;
    }
    
    .summary-insights ul {
        list-style: none;
        padding: 0;
    }
    
    .summary-insights li {
        padding: 0.5rem 0;
        border-bottom: 1px solid #e2e8f0;
    }
    
    .summary-insights li:last-child {
        border-bottom: none;
    }
`;
document.head.appendChild(style);
