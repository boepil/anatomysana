/*
  Anatomator – Yoga Anatomy Quiz
  Single-file JS powering a lightweight offline quiz app.
*/

// Seed dataset (12 asanas; extendable)
const ASANA_DATA = [
  {
    id: "downward_dog",
    name: "Adho Mukha Svanasana (Downward Facing Dog)",
    aliases: ["downward dog", "adho mukha"],
    quizOptions: [
      {
        id: "A",
        text: "Shoulder flexion to ~120°, scapular protraction and upward rotation, elbows extended, wrists dorsiflexed.",
        correct: true,
      },
      {
        id: "B",
        text: "Shoulder extension, scapular retraction and downward rotation, elbows extended, wrists dorsiflexed.",
        correct: false,
      },
      {
        id: "C",
        text: "Shoulder abduction, scapular elevation, elbows flexed, wrists in neutral.",
        correct: false,
      },
      {
        id: "D",
        text: "Shoulder flexion, scapular protraction, elbows flexed, wrists ulnar deviated.",
        correct: false,
      },
    ],
  },
  {
    id: "mountain_pose",
    name: "Tadasana (Mountain Pose)",
    aliases: ["mountain pose", "tadasana"],
    quizOptions: [
      {
        id: "A",
        text: "Shoulder neutral, scapulae neutral (slight retraction), elbows extended, wrists neutral.",
        correct: true,
      },
      {
        id: "B",
        text: "Shoulder abduction 90°, scapular elevation, elbows extended, wrists dorsiflexed.",
        correct: false,
      },
      {
        id: "C",
        text: "Shoulder extension, scapular depression, elbows flexed, wrists neutral.",
        correct: false,
      },
      {
        id: "D",
        text: "Shoulder flexion, scapular upward rotation, elbows extended, wrists dorsiflexed.",
        correct: false,
      },
    ],
  },
  {
    id: "upward_salute",
    name: "Urdhva Hastasana (Upward Salute)",
    aliases: ["upward salute", "urdhva hastasana"],
    quizOptions: [
      {
        id: "A",
        text: "Shoulder full flexion, scapular upward rotation and slight elevation, elbows extended, wrists neutral or slight extension.",
        correct: true,
      },
      {
        id: "B",
        text: "Shoulder horizontal abduction, scapular retraction, elbows flexed, wrists neutral.",
        correct: false,
      },
      {
        id: "C",
        text: "Shoulder extension, scapular depression, elbows extended, wrists ulnar deviated.",
        correct: false,
      },
      {
        id: "D",
        text: "Shoulder horizontal abduction, scapular retraction, elbows flexed, wrists dorsiflexed.",
        correct: false,
      },
    ],
  },
  {
    id: "warrior_ii",
    name: "Virabhadrasana II (Warrior II)",
    aliases: ["warrior 2", "virabhadrasana ii"],
    quizOptions: [
      {
        id: "A",
        text: "Lead arm: Shoulder abduction ~90°, scapular upward rotation, elbow extended, wrist neutral.",
        correct: true,
      },
      {
        id: "B",
        text: "Lead arm: Shoulder flexion, scapular protraction, elbow extended.",
        correct: false,
      },
      {
        id: "C",
        text: "Lead arm: Shoulder adduction, scapular downward rotation, elbow flexed.",
        correct: false,
      },
      {
        id: "D",
        text: "Lead arm: Shoulder horizontal adduction, scapular protraction, elbow flexed.",
        correct: false,
      },
    ],
  },
  {
    id: "chair_pose",
    name: "Utkatasana (Chair Pose)",
    aliases: ["chair pose", "utkatasana"],
    quizOptions: [
      {
        id: "A",
        text: "Shoulder flexion to ~90°, scapular upward rotation, elbows extended, wrists neutral.",
        correct: true,
      },
      {
        id: "B",
        text: "Shoulder horizontal abduction, scapular retraction, elbows extended, wrists dorsiflexed.",
        correct: false,
      },
      {
        id: "C",
        text: "Shoulder extension, scapular depression, elbows flexed, wrists neutral.",
        correct: false,
      },
      {
        id: "D",
        text: "Shoulder horizontal abduction, scapular retraction, elbows extended, wrists pronated.",
        correct: false,
      },
    ],
  },
  {
    id: "plank_pose",
    name: "Phalakasana (Plank Pose)",
    aliases: ["plank", "phalakasana"],
    quizOptions: [
      {
        id: "A",
        text: "Shoulder flexion ~90°, scapular protraction, elbows extended, wrists dorsiflexed.",
        correct: true,
      },
      {
        id: "B",
        text: "Shoulder extension, scapular retraction, elbows flexed, wrists neutral.",
        correct: false,
      },
      {
        id: "C",
        text: "Shoulder abduction, scapular upward rotation, elbows extended, wrists dorsiflexed.",
        correct: false,
      },
      {
        id: "D",
        text: "Shoulder horizontal abduction, scapular depression, elbows flexed, wrists ulnar deviated.",
        correct: false,
      },
    ],
  },
  {
    id: "chaturanga",
    name: "Chaturanga Dandasana (Four-Limbed Staff Pose)",
    aliases: ["chaturanga", "low plank"],
    quizOptions: [
      {
        id: "A",
        text: "Shoulder extension from flexed position, scapular retraction, elbows flexed ~90°, wrists dorsiflexed.",
        correct: true,
      },
      {
        id: "B",
        text: "Shoulder flexion, scapular protraction, elbows extended, wrists dorsiflexed.",
        correct: false,
      },
      {
        id: "C",
        text: "Shoulder horizontal abduction, scapular retraction, elbows flexed 45°, wrists in neutral.",
        correct: false,
      },
      {
        id: "D",
        text: "Shoulder extension, scapular depression, elbows extended, wrists dorsiflexed.",
        correct: false,
      },
    ],
  },
  {
    id: "cobra_pose",
    name: "Bhujangasana (Cobra Pose)",
    aliases: ["cobra pose", "bhujangasana"],
    quizOptions: [
      {
        id: "A",
        text: "Shoulder extension, scapular retraction and depression, elbows extended, wrists dorsiflexed.",
        correct: true,
      },
      {
        id: "B",
        text: "Shoulder flexion, scapular protraction, elbows flexed, wrists neutral.",
        correct: false,
      },
      {
        id: "C",
        text: "Shoulder abduction, scapular upward rotation, elbows extended, wrists dorsiflexed.",
        correct: false,
      },
      {
        id: "D",
        text: "Shoulder horizontal abduction, scapular depression, elbows flexed, wrists dorsiflexed.",
        correct: false,
      },
    ],
  },
  {
    id: "locust_pose",
    name: "Salabhasana (Locust Pose)",
    aliases: ["locust pose", "salabhasana"],
    quizOptions: [
      {
        id: "A",
        text: "Shoulder extension, scapular retraction, elbows extended, wrists neutral.",
        correct: true,
      },
      {
        id: "B",
        text: "Shoulder flexion, scapular protraction, elbows extended, wrists dorsiflexed.",
        correct: false,
      },
      {
        id: "C",
        text: "Shoulder abduction, scapular upward rotation, elbows flexed, wrists neutral.",
        correct: false,
      },
      {
        id: "D",
        text: "Shoulder horizontal adduction, scapular protraction, elbows flexed, wrists ulnar deviated.",
        correct: false,
      },
    ],
  },
  {
    id: "headstand",
    name: "Sirsasana (Headstand)",
    aliases: ["headstand", "sirsasana"],
    quizOptions: [
      {
        id: "A",
        text: "Shoulder flexion ~180°, scapular upward rotation and elevation, elbows flexed, wrists dorsiflexed.",
        correct: true,
      },
      {
        id: "B",
        text: "Shoulder extension, scapular depression, elbows flexed, wrists dorsiflexed.",
        correct: false,
      },
      {
        id: "C",
        text: "Shoulder horizontal abduction, scapular retraction, elbows extended, wrists in neutral.",
        correct: false,
      },
      {
        id: "D",
        text: "Shoulder horizontal abduction, scapular retraction, elbows extended, wrists ulnar deviated.",
        correct: false,
      },
    ],
  },
  {
    id: "shoulderstand",
    name: "Sarvangasana (Shoulderstand)",
    aliases: ["shoulderstand", "sarvangasana"],
    quizOptions: [
      {
        id: "A",
        text: "Shoulder extension from flexed position, scapular downward rotation and retraction, elbows flexed, wrists in neutral.",
        correct: true,
      },
      {
        id: "B",
        text: "Shoulder flexion, scapular protraction, elbows extended, wrists dorsiflexed.",
        correct: false,
      },
      {
        id: "C",
        text: "Shoulder abduction, scapular upward rotation, elbows extended, wrists neutral.",
        correct: false,
      },
      {
        id: "D",
        text: "Shoulder extension, scapular depression, elbows extended, wrists dorsiflexed.",
        correct: false,
      },
    ],
  },
  {
    id: "bow_pose",
    name: "Dhanurasana (Bow Pose)",
    aliases: ["bow pose", "dhanurasana"],
    quizOptions: [
      {
        id: "A",
        text: "Shoulder extension, scapular retraction, elbows flexed, wrists plantarflexed (holding feet).",
        correct: true,
      },
      {
        id: "B",
        text: "Shoulder flexion, scapular protraction, elbows extended, wrists dorsiflexed.",
        correct: false,
      },
      {
        id: "C",
        text: "Shoulder horizontal abduction, scapular retraction, elbows extended, wrists neutral.",
        correct: false,
      },
      {
        id: "D",
        text: "Shoulder horizontal adduction, scapular protraction, elbows flexed, wrists dorsiflexed.",
        correct: false,
      },
    ],
  },
];

// Aphoristic definitions for terms present in answers
const TERM_DEFINITIONS = {
  // Upper body joints
  shoulder: "Shoulder ball-and-socket joint.",
  scapular: "Scapula movement relative to ribcage.",
  elbow: "Humeroulnar joint at the arm.",
  wrist: "Radiocarpal joint of the hand.",
  
  // Trunk joints and structures
  spine: "Vertebral column from cervical to lumbar.",
  cervical: "Neck region of the spine (C1-C7).",
  thoracic: "Mid-back region of the spine (T1-T12).",
  lumbar: "Lower back region of the spine (L1-L5).",
  thoracolumbar: "Transition area between thoracic and lumbar spine.",
  pelvis: "Bony structure formed by hip bones and sacrum.",
  sacrum: "Triangular bone at base of spine, part of pelvis.",
  core: "Muscles of the abdomen and lower back.",
  
  // Lower body joints
  hip: "Ball-and-socket joint where femur head articulates with acetabulum of pelvis; allows flexion, extension, abduction, adduction, and rotation.",
  knee: "Hinge joint between femur and tibia; primary movements are flexion and extension with slight rotation when flexed.",
  ankle: "Hinge joint between tibia/fibula and talus; allows dorsiflexion and plantarflexion with some inversion/eversion.",
  
  // movements
  flexion: "Angle decreases; limb moves forward/up (sagittal, mediolateral axis).",
  extension: "Angle increases; limb moves backward/down (sagittal, mediolateral axis).",
  abduction: "Limb moves away from midline (frontal, anteroposterior axis).",
  adduction: "Limb moves toward midline (frontal, anteroposterior axis).",
  "lateral flexion": "Spine bends side-to-side (frontal, anteroposterior axis).",
  "axial rotation": "Spine rotates around vertical axis (transverse, vertical axis).",
  "anterior tilt": "Pelvis tilts forward; ASIS moves down (sagittal).",
  "posterior tilt": "Pelvis tilts back; ASIS moves up (sagittal).",
  inversion: "Foot tilts toward midline (frontal, anteroposterior axis).",
  eversion: "Foot tilts away from midline (frontal, anteroposterior axis).",
  plantarflexion: "Foot points down at ankle (sagittal, mediolateral axis).",
  dorsiflexion: "Foot bends up at ankle (sagittal, mediolateral axis).",
  "horizontal abduction": "Arm opens across transverse plane (transverse, vertical axis).",
  "horizontal adduction": "Arm crosses midline in transverse plane (transverse, vertical axis).",
  protraction: "Scapula glides around ribs forward (frontal, anteroposterior axis).",
  retraction: "Scapula draws toward spine (frontal, anteroposterior axis).",
  elevation: "Scapula lifts upward (frontal, anteroposterior axis).",
  depression: "Scapula presses downward (frontal, anteroposterior axis).",
  "upward rotation": "Scapula rotates to tip glenoid up (frontal, anteroposterior axis).",
  "downward rotation": "Scapula rotates to tip glenoid down (frontal, anteroposterior axis).",
  pronated: "Forearm rotated palm-down (transverse, vertical axis).",
  supinated: "Forearm rotated palm-up (transverse, vertical axis).",
  dorsiflexed: "Wrist extends backward (sagittal, mediolateral axis).",
  plantarflexed: "Wrist flexes forward (sagittal, mediolateral axis).",
  neutral: "Natural, mid-range position.",
  "ulnar deviated": "Wrist tilts toward ulna (frontal, anteroposterior axis).",
  
  // Additional trunk and lower body terms
  engaged: "Muscles are actively contracted and working.",
  relaxed: "Muscles are in a state of minimal tension.",
  protected: "Joint is positioned safely to avoid strain.",
  long: "Spine is extended to its natural length.",
  hyperextension: "Excessive extension beyond normal range.",
  excessive: "Movement beyond the optimal range.",
  marked: "Significant or noticeable movement.",
  pronounced: "Clearly visible or prominent movement.",
  
  // Specific movement + joint combinations for better explanations
  "hips extended": "Hip joints are straightened; thigh moves backward relative to pelvis.",
  "knees extended": "Knee joints are straightened; leg forms a straight line from hip to ankle.",
  "ankles dorsiflexed": "Feet are pulled upward toward shins; toes point toward knees.",
  "hips flexed": "Hip joints are bent; thigh moves forward toward abdomen.",
  "knees flexed": "Knee joints are bent; lower leg moves toward back of thigh.",
  "ankles plantarflexed": "Feet are pointed downward; toes point away from shins.",
  "hips abducted": "Hip joints move thighs away from midline; legs spread apart.",
  "knees abducted": "Knee joints move lower legs away from midline; feet spread apart.",
  "ankles inverted": "Feet tilt toward midline; soles face each other.",
  "hips adducted": "Hip joints move thighs toward midline; legs come together.",
  "knees adducted": "Knee joints move lower legs toward midline; feet come together.",
  "ankles everted": "Feet tilt away from midline; soles face outward.",
};

// Inline fallback image (1x1 PNG transparent)
const IMG_PLACEHOLDER_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/6WvE2QAAAAASUVORK5CYII=';

// Sound effects
const CORRECT_SOUND = new Audio('sound/cuckoo.wav');
const INCORRECT_SOUND = new Audio('sound/Record_hit.wav');

// Preload sounds and handle errors gracefully
CORRECT_SOUND.preload = 'auto';
INCORRECT_SOUND.preload = 'auto';

CORRECT_SOUND.onerror = function() {
  console.warn('Could not load correct answer sound');
};

INCORRECT_SOUND.onerror = function() {
  console.warn('Could not load incorrect answer sound');
};

// Normalization and parsing helpers for combined terms
const JOINT_BASE_MAP = {
  // Upper body
  shoulder: "shoulder",
  scapular: "scapular",
  elbow: "elbow",
  elbows: "elbow",
  wrist: "wrist",
  wrists: "wrist",
  scapulae: "scapular",
  
  // Trunk
  spine: "spine",
  cervical: "cervical",
  thoracic: "thoracic",
  lumbar: "lumbar",
  thoracolumbar: "thoracolumbar",
  pelvis: "pelvis",
  sacrum: "sacrum",
  core: "core",
  
  // Lower body
  hip: "hip",
  hips: "hip",
  knee: "knee",
  knees: "knee",
  ankle: "ankle",
  ankles: "ankle",
};

// Specific movement + joint combinations that should be extracted as whole phrases
const COMBINED_MOVEMENTS = [
  "hips extended", "knees extended", "ankles dorsiflexed",
  "hips flexed", "knees flexed", "ankles plantarflexed",
  "hips abducted", "knees abducted", "ankles inverted",
  "hips adducted", "knees adducted", "ankles everted"
];

const MOVEMENT_PHRASES = [
  "lateral flexion",
  "axial rotation",
  "anterior tilt",
  "posterior tilt",
  "horizontal abduction",
  "horizontal adduction",
  "upward rotation",
  "downward rotation",
  "ulnar deviated",
  "plantarflexed",
  "plantarflexion",
  "dorsiflexion",
  "dorsiflexed",
  "pronated",
  "supinated",
  "inversion",
  "eversion",
  "abduction",
  "adduction",
  "flexion",
  "extension",
  "protraction",
  "retraction",
  "elevation",
  "depression",
  "neutral",
];

// Utility helpers
function shuffleInPlace(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function $(id) {
  return document.getElementById(id);
}

function html(strings, ...values) {
  return strings.reduce((acc, s, i) => acc + s + (values[i] ?? ""), "");
}

// Region sequencing: upper (shoulders/arms), trunk (spine/abdomen), lower (hips/lower limb)
const REGION_SEQUENCE = ["upper", "trunk", "lower"];
const REGION_LABEL = { "upper-body": "Upper body", "trunk": "Trunk/abdomen", "lower-body": "Lower body" };

// State
const state = {
  mode: "practice", // practice | review
  questionOrder: [],
  currentIndex: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  wrongAnswersPool: [], // items: { asanaId, chosenId, correctOption, category }
  answered: false,
  seenCounts: Object.create(null),
  remainingAsanaIds: [],
  currentAsanaId: null,
  selectedRegion: "upper-body", // Current category being tested
  totalQuestionsAnswered: 0, // Track total questions across all categories
  maxTotalQuestions: 36, // Maximum total questions (3 categories × 12 asanas)
  completedRegions: new Set(), // Track which categories have been completed
  pausedPracticeState: null, // To store state when pausing practice
  currentCategory: "upper-body", // Current category in the cycle
  questionsInCurrentCategory: 0, // Questions answered in current category
  maxQuestionsPerCategory: 12, // Questions per category
  categorySequence: ["upper-body", "trunk", "lower-body"], // Order of categories
  currentCategoryIndex: 0, // Index in category sequence
  questionHistory: [], // Track all questions with category and correctness
};

function resetSession(preserveTotalQuestions = false) {
  state.mode = "practice";
  state.questionOrder = shuffleInPlace([...ASANA_DATA.keys()]);
  state.currentIndex = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.answered = false;
  // Clear wrong answers only on full restart, not when changing region
  if (!preserveTotalQuestions) {
    state.wrongAnswersPool = [];
    state.questionHistory = [];
  }
  state.seenCounts = Object.create(null);
  state.remainingAsanaIds = shuffleInPlace(ASANA_DATA.map((a) => a.id));
  state.currentAsanaId = null;
  
  // Reset category cycling system
  if (!preserveTotalQuestions) {
    state.totalQuestionsAnswered = 0;
    state.completedRegions.clear();
    state.currentCategory = "upper-body";
    state.questionsInCurrentCategory = 0;
    state.currentCategoryIndex = 0;
  }
  
  // Update selectedRegion to match currentCategory
  state.selectedRegion = state.currentCategory;
  
  updateScoreboard();
  $("modeLabel").textContent = REGION_LABEL[state.currentCategory];
  
  // Update UI elements to reflect current category
  document.querySelectorAll('.region-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.region === state.currentCategory);
  });
  
  const dropdown = document.getElementById('focusDropdown');
  if (dropdown) {
    dropdown.value = state.currentCategory;
  }
  
  // Reset to image view by default when starting new session
  resetToImageView();
  
  $("summary").hidden = true;
  $("card").hidden = false;
  $("backToQuizBtn").hidden = true;
  $("midReviewBtn").hidden = false;
  
  renderCurrentQuestion();
}

function startReview() {
  console.log("startReview called, mode:", state.mode, "wrongAnswersPool length:", state.wrongAnswersPool.length);
  // Check if there are wrong answers to review
  if (state.wrongAnswersPool.length === 0) {
    console.warn("No wrong answers to review");
    return;
  }

  // Save current practice state if not already in review mode
  if (state.mode === "practice") {
    state.pausedPracticeState = {
      questionOrder: [...state.questionOrder],
      currentIndex: state.currentIndex,
      score: state.score,
      streak: state.streak,
      bestStreak: state.bestStreak,
      answered: state.answered,
      seenCounts: { ...state.seenCounts },
      remainingAsanaIds: [...state.remainingAsanaIds],
      currentAsanaId: state.currentAsanaId,
      selectedRegion: state.selectedRegion,
      totalQuestionsAnswered: state.totalQuestionsAnswered,
      completedRegions: new Set(state.completedRegions),
      currentCategory: state.currentCategory,
      questionsInCurrentCategory: state.questionsInCurrentCategory,
      currentCategoryIndex: state.currentCategoryIndex,
    };
  }

  state.mode = "review";
  state.currentIndex = 0;
  shuffleInPlace(state.wrongAnswersPool);
  
  // Reset to image view by default when starting review
  resetToImageView();
  
  $("summary").hidden = true;
  $("card").hidden = false;
  $("midReviewBtn").hidden = true; // NEW: Hide "Review wrong answers" button during review
  $("backToQuizBtn").hidden = false; // NEW: Show "Back to Quiz" button
  renderReviewQuestion();
}

function finishSession() {
  $("card").hidden = true;
  $("summary").hidden = false;
  $("finalScore").textContent = String(state.score);
  $("finalBestStreak").textContent = String(state.bestStreak);
  $("summaryReviewBtn").disabled = state.wrongAnswersPool.length === 0;
  renderFrequencyMatrix();
}

function resetToImageView() {
  // Reset to image view by default - helper function to avoid code duplication
  try {
    $('reviewPane').style.display = 'none';
    $('asanaImg').style.display = 'block';
    $('asanaImg').hidden = false;
    $('toggleMediaBtn').textContent = 'Text';
  } catch (_) {
    // ignore if elements not found
  }
}

function updateScoreboard() {
  $("score").textContent = String(state.score);
  $("streak").textContent = String(state.streak);
  $("bestStreak").textContent = String(state.bestStreak);
  
  // Update questions counter with visual feedback
  const questionsCounter = $("questionsCounter");
  const remainingQuestions = state.maxTotalQuestions - state.totalQuestionsAnswered;
  questionsCounter.textContent = String(state.totalQuestionsAnswered) + "/36";
  
  // Add visual warning when approaching limit
  questionsCounter.className = "";
  if (remainingQuestions <= 3) {
    questionsCounter.classList.add("warning");
  } else if (remainingQuestions <= 6) {
    questionsCounter.classList.add("caution");
  }
  
  
  // Update mid-session review button state
  const hasWrongAnswers = state.wrongAnswersPool.length > 0;
  $("midReviewBtn").disabled = !hasWrongAnswers;
  console.log("updateScoreboard: wrongAnswersPool length:", state.wrongAnswersPool.length, "button disabled:", !hasWrongAnswers);
}

function getAsanaById(id) {
  return ASANA_DATA.find((a) => a.id === id) || null;
}

function currentAsana() {
  // Prefer the locked current asana if set
  if (state.currentAsanaId) {
    return getAsanaById(state.currentAsanaId);
  }
  // Otherwise, peek the next remaining without consuming
  if (state.remainingAsanaIds.length > 0) {
    const nextId = state.remainingAsanaIds[0];
    state.currentAsanaId = nextId;
    return getAsanaById(nextId);
  }
  return null;
}

function getRegionOptions(asana, region) {
  // Incrementally add per-asana overrides here as REGION_OVERRIDES grows
  const overrides = REGION_OVERRIDES[asana.id];
  if (!overrides) return asana.quizOptions; // default to upper
  if (region === "trunk" && overrides.trunk) return overrides.trunk;
  if (region === "lower-body" && overrides.lower) return overrides.lower;
  return asana.quizOptions; // upper-body
}

function buildCombinedTitle(name) {
  if (!name) return "";
  const match = name.match(/^(.*?)\s*\(([^)]+)\)/);
  if (match) {
    const sanskrit = match[1].trim();
    return sanskrit; // Return only the Sanskrit name
  }
  return name;
}

function renderCurrentQuestion() {
  const asana = currentAsana();
  if (!asana) {
    finishSession();
    return;
  }
  // ensure two-column layout (image left, text right)
  $("card").classList.add("two-col");
  // track frequency of asanas shown
  state.seenCounts[asana.id] = (state.seenCounts[asana.id] || 0) + 1;
  // Lock in current asana id in case not set
  state.currentAsanaId = asana.id;
  $("asanaName").textContent = buildCombinedTitle(asana.name);
  const img = $("asanaImg");
  img.hidden = false;
  img.style.display = 'block';
  img.alt = asana.name;
  img.onerror = function firstError() {
    // Try a project-level placeholder file if present; otherwise use inline data URL
    img.onerror = function secondError() {
      img.onerror = null;
      img.src = IMG_PLACEHOLDER_DATA_URL;
    };
    img.src = `images/placeholder.jpg`;
  };
  img.src = `images/${asana.id}.jpg`;
  const answersEl = $("answers");
  answersEl.innerHTML = "";
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("explanations").innerHTML = "";
  $("submitBtn").hidden = false;
  $("nextBtn").hidden = true;
  state.answered = false;

  // Use the current category for the question
  const region = state.currentCategory;
  const options = shuffleInPlace([...getRegionOptions(asana, region)]);
  options.forEach((opt, idx) => {
    const id = `opt_${opt.id}`;
    const placementLabel = String.fromCharCode(65 + idx); // A, B, C, D by position
    const wrapper = document.createElement("label");
    wrapper.className = "answer";
    wrapper.innerHTML = html`
      <input type="radio" name="answer" value="${opt.id}" id="${id}" />
      <div>
        <div><strong>${placementLabel}.</strong> ${opt.text}</div>
      </div>
    `;
    answersEl.appendChild(wrapper);
  });
  // Auto-grade on selection
  answersEl.addEventListener(
    "change",
    (e) => {
      const target = e.target;
      if (target && target.name === "answer") {
        selectAnswerAndGrade();
      }
    },
    { once: true }
  );
}

function renderReviewQuestion() {
  const reviewItem = state.wrongAnswersPool[state.currentIndex];
  const asana = getAsanaById(reviewItem.asanaId);

  $("asanaName").textContent = buildCombinedTitle(asana.name);
  const img = $("asanaImg");
  img.hidden = false;
  img.style.display = 'block';
  img.alt = asana.name;
  img.onerror = function firstError() {
    img.onerror = function secondError() {
      img.onerror = null;
      img.src = IMG_PLACEHOLDER_DATA_URL;
    };
    img.src = `images/placeholder.jpg`;
  };
  img.src = `images/${asana.id}.jpg`;

  const answersEl = $("answers");
  answersEl.innerHTML = "";
  $("feedback").textContent = "Reviewing your incorrect answers.";
  $("feedback").className = "feedback";
  $("explanations").innerHTML = "";
  $("submitBtn").hidden = true;
  $("nextBtn").hidden = false;
  // ensure two-column layout in review mode
  $("card").classList.add("two-col");

  // Use the category saved at the time of the wrong answer; fallback to current
  const reviewCategory = reviewItem.category || state.currentCategory;
  // Reflect the category in the UI without mutating currentCategory
  try {
    $("modeLabel").textContent = REGION_LABEL[reviewCategory] || REGION_LABEL[state.currentCategory];
    document.querySelectorAll('.region-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.region === reviewCategory);
    });
    
    // Update dropdown menu
    const dropdown = document.getElementById('focusDropdown');
    if (dropdown) {
      dropdown.value = reviewCategory;
    }
  } catch (_) {}
  const options = getRegionOptions(asana, reviewCategory);
  options.forEach((opt, idx) => {
    const id = `opt_${opt.id}`;
    const placementLabel = String.fromCharCode(65 + idx);
    const wrapper = document.createElement("label");
    wrapper.className = "answer";

    if (opt.id === reviewItem.correctOption.id) {
      wrapper.classList.add("correct");
    } else if (opt.id === reviewItem.chosenId) {
      wrapper.classList.add("incorrect");
    }

    wrapper.innerHTML = html`
      <input type="radio" name="answer" value="${opt.id}" id="${id}" disabled />
      <div>
        <div><strong>${placementLabel}.</strong> ${opt.text}</div>
      </div>
    `;
    answersEl.appendChild(wrapper);
  });

  showExplanationsForCorrectText(reviewItem.correctOption.text);
}

function parseTermsFromText(text) {
  const found = [];
  const lower = text.toLowerCase();

  // 1) Extract specific combined movement + joint phrases first (highest priority)
  for (const combined of COMBINED_MOVEMENTS) {
    if (lower.includes(combined) && !found.includes(combined)) {
      found.push(combined);
    }
  }

  // 2) Extract combined joint + movement phrases
  const combinedRegex = new RegExp(
    `\\b(${Object.keys(JOINT_BASE_MAP).join("|")})\\s+(${MOVEMENT_PHRASES
      .sort((a, b) => b.length - a.length)
      .map((p) => p.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
      .join("|")})\\b`,
    "g"
  );
  let match;
  while ((match = combinedRegex.exec(lower)) !== null) {
    const joint = JOINT_BASE_MAP[match[1]];
    const movement = match[2];
    const combined = `${joint} ${movement}`;
    if (!found.includes(combined)) found.push(combined);
  }

  // 3) Extract standalone movement terms
  for (const mv of MOVEMENT_PHRASES) {
    if (lower.includes(mv) && !found.includes(mv)) {
      found.push(mv);
    }
  }

  // 4) Extract standalone joint mentions
  for (const alias of Object.keys(JOINT_BASE_MAP)) {
    if (lower.includes(alias)) {
      const norm = JOINT_BASE_MAP[alias];
      if (!found.includes(norm)) found.push(norm);
    }
  }

  return found;
}

function showExplanationsForCorrectText(correctText) {
  const container = $("explanations");
  container.innerHTML = "";
  
  const terms = parseTermsFromText(correctText);
  
  // Filter terms based on the review item's category when in review mode
  const activeRegion = state.mode === 'review' && state.wrongAnswersPool[state.currentIndex]
    ? (state.wrongAnswersPool[state.currentIndex].category || state.currentCategory)
    : state.currentCategory;
  const regionTerms = filterTermsByRegion(terms, activeRegion);
  
  for (const term of regionTerms) {
    let title = term;
    let definition = TERM_DEFINITIONS[term];
    if (!definition) {
      // If it's a combined term, use the movement definition
      const parts = term.split(" ");
      if (parts.length >= 2) {
        const movement = parts.slice(1).join(" ");
        const movementDef = TERM_DEFINITIONS[movement];
        if (movementDef) definition = movementDef;
      }
    }
    if (!definition) continue;
    const line = document.createElement("div");
    line.className = "line";
    line.innerHTML = `<span class="term">${toTitleCase(title)}</span> — ${definition}`;
    container.appendChild(line);
  }
  
  // If no region-specific terms found, show a message
  if (regionTerms.length === 0) {
    const line = document.createElement("div");
    line.className = "line";
    line.innerHTML = `<span class="term">No specific anatomical terms</span> — Focus on the overall movement and alignment for this region.`;
    container.appendChild(line);
  }
}

function filterTermsByRegion(terms, region) {
  const regionTermMap = {
    "upper-body": [
      "shoulder", "scapular", "elbow", "wrist", "protraction", "retraction", 
      "elevation", "depression", "upward rotation", "downward rotation", 
      "pronated", "supinated", "dorsiflexed", "plantarflexed", "ulnar deviated"
    ],
    "trunk": [
      "spine", "cervical", "thoracic", "lumbar", "thoracolumbar", "pelvis", 
      "sacrum", "core", "lateral flexion", "axial rotation", "anterior tilt", 
      "posterior tilt", "engaged", "relaxed", "protected", "long", 
      "hyperextension", "excessive", "marked", "pronounced"
    ],
    "lower-body": [
      "hip", "hips", "knee", "knees", "ankle", "ankles", "flexion", "flexed", 
      "extension", "extended", "abduction", "abducted", "adduction", "adducted",
      "inversion", "inverted", "eversion", "everted", "plantarflexion", 
      "plantarflexed", "dorsiflexion", "dorsiflexed", "neutral",
      "hips extended", "knees extended", "ankles dorsiflexed",
      "hips flexed", "knees flexed", "ankles plantarflexed",
      "hips abducted", "knees abducted", "ankles inverted",
      "hips adducted", "knees adducted", "ankles everted"
    ]
  };
  
  const relevantTerms = regionTermMap[region] || [];
  
  return terms.filter(term => {
    // Check if the term or any part of it matches relevant terms for the region
    const isRelevant = relevantTerms.some(relevant => {
      // Check for exact match
      if (term === relevant) return true;
      // Check if term contains the relevant term
      if (term.includes(relevant)) return true;
      // Check if relevant term contains the term
      if (relevant.includes(term)) return true;
      // Check for plural/singular variations
      if (term === relevant + 's' || relevant === term + 's') return true;
      if (term === relevant + 'ed' || relevant === term + 'ed') return true;
      return false;
    });
    
    return isRelevant;
  });
}

function capitalize(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function toTitleCase(s) {
  return s
    .split(" ")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

// Sound playing helper function
function playSound(sound) {
  try {
    // Reset the sound to the beginning in case it was already played
    sound.currentTime = 0;
    sound.play().catch(error => {
      console.warn('Could not play sound:', error);
    });
  } catch (error) {
    console.warn('Error playing sound:', error);
  }
}

function selectAnswerAndGrade() {
  if (state.answered) {
    return; // already graded
  }
  const asana = currentAsana();
  const form = $("answers");
  const choice = form.querySelector('input[name="answer"]:checked');
  if (!choice) {
    // Nudge UI but do not alert
    $("submitBtn").animate([{ transform: "scale(1.0)" }, { transform: "scale(1.03)" }], {
      duration: 120,
      easing: "ease-out",
    });
        return;
  }
  const chosenId = choice.value;
  
  // CRITICAL FIX: Use the region-specific options that are actually displayed
  const regionOptions = getRegionOptions(asana, state.currentCategory);
  const correctOption = regionOptions.find((o) => o.correct);
  
  const allLabels = Array.from($("answers").getElementsByClassName("answer"));
  const chosenWrapper = choice.closest(".answer");

  let correct = false;
  if (correctOption && correctOption.id === chosenId) {
    correct = true;
    chosenWrapper.classList.add("correct");
  } else {
    chosenWrapper.classList.add("incorrect");
    // mark the correct one too
    for (const label of allLabels) {
      const input = label.querySelector("input");
      if (input && input.value === correctOption.id) {
        label.classList.add("correct");
      }
    }
  }

  state.answered = true;
  $("submitBtn").hidden = true;
  $("nextBtn").hidden = false;

  // Increment counters
  state.totalQuestionsAnswered += 1;
  state.questionsInCurrentCategory += 1;

  // Track question in history
  state.questionHistory.push({
    asanaId: asana.id,
    asanaName: asana.name,
    category: state.currentCategory,
    chosenId,
    correctOption,
    correct: correct,
    questionNumber: state.totalQuestionsAnswered
  });

  if (correct) {
    state.score += 10;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    $("feedback").textContent = "Correct!";
    $("feedback").className = "feedback correct";
    $("explanations").innerHTML = "";
    // Play correct answer sound
    playSound(CORRECT_SOUND);
    // keep two-column layout; nothing to change on correct
  } else {
    state.streak = 0;
    // Only indicate incorrect; correct answer is already highlighted below
    $("feedback").textContent = "Incorrect.";
    $("feedback").className = "feedback incorrect";
    // Play incorrect answer sound
    playSound(INCORRECT_SOUND);
    state.wrongAnswersPool.push({
      asanaId: asana.id,
      chosenId,
      correctOption,
      category: state.currentCategory, // store category at time of answer
    });
    // keep two-column layout (image left, explanations right)
    $("card").classList.add("two-col");
    showExplanationsForCorrectText(correctOption.text);
  }

  updateScoreboard();
}

// NEW: Function to return to the paused practice quiz
function backToQuiz() {
  if (state.pausedPracticeState) {
    // Restore the saved practice state
    state.questionOrder = [...state.pausedPracticeState.questionOrder];
    state.currentIndex = state.pausedPracticeState.currentIndex;
    state.score = state.pausedPracticeState.score;
    state.streak = state.pausedPracticeState.streak;
    state.bestStreak = state.pausedPracticeState.bestStreak;
    state.answered = state.pausedPracticeState.answered;
    state.seenCounts = { ...state.pausedPracticeState.seenCounts };
    state.remainingAsanaIds = [...state.pausedPracticeState.remainingAsanaIds];
    state.currentAsanaId = state.pausedPracticeState.currentAsanaId;
    state.selectedRegion = state.pausedPracticeState.selectedRegion;
    state.totalQuestionsAnswered = state.pausedPracticeState.totalQuestionsAnswered;
    state.completedRegions = new Set(state.pausedPracticeState.completedRegions);
    state.currentCategory = state.pausedPracticeState.currentCategory;
    state.questionsInCurrentCategory = state.pausedPracticeState.questionsInCurrentCategory;
    state.currentCategoryIndex = state.pausedPracticeState.currentCategoryIndex;
    
    state.pausedPracticeState = null; // Clear the paused state
  } else {
    // Safety fallback: if no paused state, just reset to a fresh session
    console.warn("No paused practice state found, resetting to fresh session");
    resetSession();
    return;
  }

  state.mode = "practice";
  
  // Reset to image view by default when returning to quiz
  resetToImageView();
  
  $("midReviewBtn").hidden = false; // Show "Review wrong answers" button
  $("backToQuizBtn").hidden = true; // Hide "Back to Quiz" button
  $("summary").hidden = true;
  $("card").hidden = false;
  updateScoreboard();
  renderCurrentQuestion(); // Render the question that was active before review
}

function onNext() {
  if (state.mode === 'review') {
    // Reset to image view by default when moving to next review question
    resetToImageView();
    
    state.currentIndex++;
    if (state.currentIndex < state.wrongAnswersPool.length) {
      renderReviewQuestion();
    } else {
      // Review session complete
      state.mode = 'practice'; // Set mode back to practice
      if (state.pausedPracticeState) {
        // If there was a paused practice session, resume it
        backToQuiz();
      } else {
        // If no paused session (i.e., review was started from summary), finish as usual
        finishSession();
      }
    }
    return;
  }

  // Reset to image view by default
  resetToImageView();

  // Consume the current asana from the remaining queue
  if (state.currentAsanaId && state.remainingAsanaIds.length > 0 && state.remainingAsanaIds[0] === state.currentAsanaId) {
    state.remainingAsanaIds.shift();
  }
  state.currentAsanaId = null;
  
  // Check if total question limit has been reached
  if (state.totalQuestionsAnswered >= state.maxTotalQuestions) {
    finishSession();
    return;
  }
  
  // Check if we've completed 12 questions in the current category
  if (state.questionsInCurrentCategory >= state.maxQuestionsPerCategory) {
    // Mark current category as completed
    state.completedRegions.add(state.currentCategory);
    
    // Check if all categories have been completed
    if (state.completedRegions.size >= state.categorySequence.length) {
      // All categories completed - finish the session
      finishSession();
      return;
    }
    
    // Move to next category
    state.currentCategoryIndex = (state.currentCategoryIndex + 1) % state.categorySequence.length;
    state.currentCategory = state.categorySequence[state.currentCategoryIndex];
    state.selectedRegion = state.currentCategory;
    state.questionsInCurrentCategory = 0;
    
    // Reset remaining asanas for new category
    state.remainingAsanaIds = shuffleInPlace(ASANA_DATA.map((a) => a.id));
    
    // Show notification about category change
    const currentCategoryName = REGION_LABEL[state.currentCategory];
    $("feedback").textContent = `Switching to ${currentCategoryName} category`;
    $("feedback").className = "feedback correct";
    
    // Update UI to reflect new category
    $("modeLabel").textContent = currentCategoryName;
    
    // Update pill buttons
    document.querySelectorAll('.region-option').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.region === state.currentCategory);
    });
    
    // Update dropdown menu
    const dropdown = document.getElementById('focusDropdown');
    if (dropdown) {
      dropdown.value = state.currentCategory;
    }
    
    // Small delay to show the message before continuing
    setTimeout(() => {
      renderCurrentQuestion();
    }, 1500);
    return;
  }
  
  // Continue with current category
  if (state.remainingAsanaIds.length > 0) {
    renderCurrentQuestion();
    return;
  }
  
  // No more asanas available - finish the session
  finishSession();
}

function wireEvents() {
  $("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    selectAnswerAndGrade();
  });
  $("nextBtn").addEventListener("click", (e) => {
    e.preventDefault();
    onNext();
  });
  $("restartBtn").addEventListener("click", (e) => {
    e.preventDefault();
    resetSession();
  });
  $("summaryRestartBtn").addEventListener("click", (e) => {
    e.preventDefault();
    resetSession();
  });
  $("summaryReviewBtn").addEventListener("click", (e) => {
    e.preventDefault();
    startReview();
  });

  // NEW: Event listener for "Review wrong answers" button (mid-session)
  const midReviewBtn = $("midReviewBtn");
  if (midReviewBtn) {
    console.log("Found midReviewBtn, adding event listener");
    midReviewBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Review button clicked, wrongAnswersPool length:", state.wrongAnswersPool.length);
      startReview();
    });
  } else {
    console.error("midReviewBtn not found in DOM");
  }

  // NEW: Event listener for "Back to Quiz" button
  $("backToQuizBtn").addEventListener("click", (e) => {
    e.preventDefault();
    backToQuiz();
  });

  

  // Add focus region selection event handlers for pill buttons
  document.querySelectorAll('.region-option').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const newRegion = button.dataset.region;
      
      // Check if changing region during an active session
      if (state.currentIndex > 0 || state.answered) {
        if (confirm('Changing the focus region will restart the current session. Continue?')) {
          changeFocusRegion(newRegion);
        }
      } else {
        changeFocusRegion(newRegion);
      }
    });
  });

  // Add dropdown event handler
  const dropdown = document.getElementById('focusDropdown');
  if (dropdown) {
    dropdown.addEventListener('change', (e) => {
      const newRegion = e.target.value;
      
      // Check if changing region during an active session
      if (state.currentIndex > 0 || state.answered) {
        if (confirm('Changing the focus region will restart the current session. Continue?')) {
          changeFocusRegion(newRegion);
        } else {
          // Reset dropdown to current region if user cancels
          dropdown.value = state.currentCategory;
        }
      } else {
        changeFocusRegion(newRegion);
      }
    });
  }
}

function getNextRegion(currentRegion) {
  const regions = ["upper-body", "trunk", "lower-body"];
  const currentIndex = regions.indexOf(currentRegion);
  if (currentIndex === -1) return null;
  
  // Find the next available region that hasn't been completed
  for (let i = 1; i <= regions.length; i++) {
    const nextIndex = (currentIndex + i) % regions.length;
    const nextRegion = regions[nextIndex];
    if (!state.completedRegions.has(nextRegion)) {
      return nextRegion;
    }
  }
  
  // All regions completed
  return null;
}

function changeFocusRegion(newRegion) {
  // Store current score, streak, and total questions before changing region
  const currentScore = state.score;
  const currentStreak = state.streak;
  const currentBestStreak = state.bestStreak;
  const currentTotalQuestions = state.totalQuestionsAnswered;
  
  // Update the selected region and current category
  state.selectedRegion = newRegion;
  state.currentCategory = newRegion;
  
  // Find the index of the new region in the category sequence
  const newIndex = state.categorySequence.indexOf(newRegion);
  if (newIndex !== -1) {
    state.currentCategoryIndex = newIndex;
  }
  
  // Persist selection
  try { localStorage.setItem("anatomator:selectedRegion", newRegion); } catch (_) {}
  
  // Update the mode label
  $("modeLabel").textContent = REGION_LABEL[newRegion];
  
  // Update the active button state
  document.querySelectorAll('.region-option').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.region === newRegion) {
      btn.classList.add('active');
    }
  });
  
  // Update dropdown menu
  const dropdown = document.getElementById('focusDropdown');
  if (dropdown) {
    dropdown.value = newRegion;
  }
  
  // Restart the session with the new region but preserve score and total questions
  resetSession(true); // preserve total questions when changing regions
  
  // Restore the score, streak, and total questions
  state.score = currentScore;
  state.streak = currentStreak;
  state.bestStreak = currentBestStreak;
  state.totalQuestionsAnswered = currentTotalQuestions;
  
  // Update the scoreboard to show the preserved values
  updateScoreboard();
}

function renderFrequencyMatrix() {
  const container = document.getElementById("freqMatrix");
  if (!container) return;
  container.innerHTML = "";
  const entries = ASANA_DATA.map((a) => ({ id: a.id, name: a.name, count: state.seenCounts[a.id] || 0 }));
  entries.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  for (const e of entries) {
    const cell = document.createElement("div");
    cell.className = "cell";
    const combined = buildCombinedTitle(e.name);
    const english = combined.includes(" • ") ? combined.split(" • ")[1] : combined;
    cell.innerHTML = `<span class="value">${e.count}</span><span class="label">${english}</span>`;
    container.appendChild(cell);
  }
}

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  wireEvents();
  // Restore last selected region from storage if available
  try {
    const savedRegion = localStorage.getItem("anatomator:selectedRegion");
    const validRegions = ["upper-body", "trunk", "lower-body"];
    if (savedRegion && validRegions.includes(savedRegion)) {
      state.selectedRegion = savedRegion;
      state.currentCategory = savedRegion;
      // Find the index of the saved region in the category sequence
      const savedIndex = state.categorySequence.indexOf(savedRegion);
      if (savedIndex !== -1) {
        state.currentCategoryIndex = savedIndex;
      }
      // Reflect active state on buttons and label
      document.querySelectorAll('.region-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.region === savedRegion);
      });
      $("modeLabel").textContent = REGION_LABEL[savedRegion];
      
      // Update dropdown menu
      const dropdown = document.getElementById('focusDropdown');
      if (dropdown) {
        dropdown.value = savedRegion;
      }
    }
  } catch (_) {}
  resetSession();
});

// Incremental region overrides: start with 3 asanas, expand later
const REGION_OVERRIDES = {
  downward_dog: {
    trunk: [
      { id: "A", text: "Spine neutral to slight axial extension; pelvis in anterior tilt.", correct: true },
      { id: "B", text: "Thoracolumbar flexion with posterior pelvic tilt.", correct: false },
      { id: "C", text: "Marked axial rotation of the spine to the right.", correct: false },
      { id: "D", text: "Pronounced lateral flexion of the lumbar spine.", correct: false },
    ],
    lower: [
      { id: "A", text: "Hips flexed, knees extended, ankles dorsiflexed.", correct: true },
      { id: "B", text: "Hips extended, knees flexed, ankles plantarflexed.", correct: false },
      { id: "C", text: "Hips abducted, knees flexed, ankles inverted.", correct: false },
      { id: "D", text: "Hips adducted, knees extended, ankles everted.", correct: false },
    ],
  },
  mountain_pose: {
    trunk: [
      { id: "A", text: "Spine neutral; pelvis neutral.", correct: true },
      { id: "B", text: "Thoracic hyperextension; pelvis posterior tilt.", correct: false },
      { id: "C", text: "Lumbar flexion; pelvis anterior tilt.", correct: false },
      { id: "D", text: "Axial rotation of the spine to the left.", correct: false },
    ],
    lower: [
      { id: "A", text: "Hips neutral, knees extended, ankles neutral.", correct: true },
      { id: "B", text: "Hips flexed, knees flexed, ankles dorsiflexed.", correct: false },
      { id: "C", text: "Hips abducted, knees extended, ankles everted.", correct: false },
      { id: "D", text: "Hips extended, knees flexed, ankles plantarflexed.", correct: false },
    ],
  },
  chair_pose: {
    trunk: [
      { id: "A", text: "Trunk slight flexion; spine long; pelvis anterior tilt.", correct: true },
      { id: "B", text: "Thoracic extension; posterior pelvic tilt.", correct: false },
      { id: "C", text: "Axial rotation right; lateral flexion left.", correct: false },
      { id: "D", text: "Lumbar hyperextension; excessive anterior pelvic tilt.", correct: false },
    ],
    lower: [
      { id: "A", text: "Hips flexed, knees flexed, ankles dorsiflexed.", correct: true },
      { id: "B", text: "Hips extended, knees extended, ankles plantarflexed.", correct: false },
      { id: "C", text: "Hips abducted, knees extended, ankles everted.", correct: false },
      { id: "D", text: "Hips adducted, knees flexed, ankles inverted.", correct: false },
    ],
  },
  shoulderstand: {
    trunk: [
      { id: "A", text: "Cervical spine protected; thoracic spine extended; core engaged.", correct: true },
      { id: "B", text: "Cervical hyperextension; lumbar spine flexed; core relaxed.", correct: false },
      { id: "C", text: "Axial rotation of the spine; lateral flexion right.", correct: false },
      { id: "D", text: "Thoracic flexion; excessive anterior pelvic tilt.", correct: false },
    ],
    lower: [
      { id: "A", text: "Hips extended; knees extended; ankles dorsiflexed.", correct: true },
      { id: "B", text: "Hips flexed; knees flexed; ankles plantarflexed.", correct: false },
      { id: "C", text: "Hips abducted; knees extended; ankles everted.", correct: false },
      { id: "D", text: "Hips adducted; knees flexed; ankles inverted.", correct: false },
    ],
  },
  plank_pose: {
    trunk: [
      { id: "A", text: "Spine neutral; core engaged; pelvis neutral.", correct: true },
      { id: "B", text: "Lumbar hyperextension; core relaxed; anterior pelvic tilt.", correct: false },
      { id: "C", text: "Thoracic flexion; core weak; posterior pelvic tilt.", correct: false },
      { id: "D", text: "Axial rotation; lateral flexion; pelvis tilted right.", correct: false },
    ],
    lower: [
      { id: "A", text: "Hips extended; knees extended; ankles dorsiflexed.", correct: true },
      { id: "B", text: "Hips flexed; knees flexed; ankles plantarflexed.", correct: false },
      { id: "C", text: "Hips abducted; knees extended; ankles everted.", correct: false },
      { id: "D", text: "Hips adducted; knees flexed; ankles inverted.", correct: false },
    ],
  },
  chaturanga: {
    trunk: [
      { id: "A", text: "Spine neutral; core engaged; controlled descent.", correct: true },
      { id: "B", text: "Lumbar collapse; core weak; uncontrolled drop.", correct: false },
      { id: "C", text: "Thoracic hyperextension; core over-engaged; rigid spine.", correct: false },
      { id: "D", text: "Axial rotation; lateral flexion; uneven descent.", correct: false },
    ],
    lower: [
      { id: "A", text: "Hips extended; knees extended; ankles dorsiflexed.", correct: true },
      { id: "B", text: "Hips flexed; knees flexed; ankles plantarflexed.", correct: false },
      { id: "C", text: "Hips abducted; knees extended; ankles everted.", correct: false },
      { id: "D", text: "Hips adducted; knees flexed; ankles inverted.", correct: false },
    ],
  },
  cobra_pose: {
    trunk: [
      { id: "A", text: "Thoracic extension; lumbar protected; core engaged.", correct: true },
      { id: "B", text: "Lumbar hyperextension; thoracic flexed; core relaxed.", correct: false },
      { id: "C", text: "Axial rotation; lateral flexion; uneven extension.", correct: false },
      { id: "D", text: "Cervical hyperextension; spine collapsed; weak core.", correct: false },
    ],
    lower: [
      { id: "A", text: "Hips extended; knees extended; ankles dorsiflexed.", correct: true },
      { id: "B", text: "Hips flexed; knees flexed; ankles plantarflexed.", correct: false },
      { id: "C", text: "Hips abducted; knees extended; ankles everted.", correct: false },
      { id: "D", text: "Hips adducted; knees flexed; ankles inverted.", correct: false },
    ],
  },
  upward_salute: {
    trunk: [
      { id: "A", text: "Spine extended; core engaged; pelvis neutral.", correct: true },
      { id: "B", text: "Lumbar hyperextension; core relaxed; anterior pelvic tilt.", correct: false },
      { id: "C", text: "Thoracic flexion; core weak; posterior pelvic tilt.", correct: false },
      { id: "D", text: "Axial rotation; lateral flexion; pelvis tilted left.", correct: false },
    ],
    lower: [
      { id: "A", text: "Hips neutral; knees extended; ankles neutral.", correct: true },
      { id: "B", text: "Hips flexed; knees flexed; ankles dorsiflexed.", correct: false },
      { id: "C", text: "Hips abducted; knees extended; ankles everted.", correct: false },
      { id: "D", text: "Hips adducted; knees flexed; ankles inverted.", correct: false },
    ],
  },
  warrior_ii: {
    trunk: [
      { id: "A", text: "Spine neutral; core engaged; pelvis facing forward.", correct: true },
      { id: "B", text: "Lumbar rotation; core weak; pelvis rotated right.", correct: false },
      { id: "C", text: "Thoracic flexion; core relaxed; anterior pelvic tilt.", correct: false },
      { id: "D", text: "Axial rotation; lateral flexion; pelvis tilted.", correct: false },
    ],
    lower: [
      { id: "A", text: "Front hip flexed; back hip extended; knees aligned; ankles stable.", correct: true },
      { id: "B", text: "Hips neutral; knees extended; ankles dorsiflexed.", correct: false },
      { id: "C", text: "Hips abducted; knees flexed; ankles everted.", correct: false },
      { id: "D", text: "Hips adducted; knees extended; ankles inverted.", correct: false },
    ],
  },
  locust_pose: {
    trunk: [
      { id: "A", text: "Thoracic extension; lumbar protected; core engaged.", correct: true },
      { id: "B", text: "Lumbar hyperextension; thoracic flexed; core relaxed.", correct: false },
      { id: "C", text: "Axial rotation; lateral flexion; uneven extension.", correct: false },
      { id: "D", text: "Cervical hyperextension; spine collapsed; weak core.", correct: false },
    ],
    lower: [
      { id: "A", text: "Hips extended; knees extended; ankles dorsiflexed.", correct: true },
      { id: "B", text: "Hips flexed; knees flexed; ankles plantarflexed.", correct: false },
      { id: "C", text: "Hips abducted; knees extended; ankles everted.", correct: false },
      { id: "D", text: "Hips adducted; knees flexed; ankles inverted.", correct: false },
    ],
  },
  headstand: {
    trunk: [
      { id: "A", text: "Cervical spine protected; thoracic extended; core engaged.", correct: true },
      { id: "B", text: "Cervical hyperextension; thoracic flexed; core relaxed.", correct: false },
      { id: "C", text: "Axial rotation; lateral flexion; uneven alignment.", correct: false },
      { id: "D", text: "Lumbar hyperextension; spine collapsed; weak core.", correct: false },
    ],
    lower: [
      { id: "A", text: "Hips extended; knees extended; ankles dorsiflexed.", correct: true },
      { id: "B", text: "Hips flexed; knees flexed; ankles plantarflexed.", correct: false },
      { id: "C", text: "Hips abducted; knees extended; ankles everted.", correct: false },
      { id: "D", text: "Hips adducted; knees flexed; ankles inverted.", correct: false },
    ],
  },
  bow_pose: {
    trunk: [
      { id: "A", text: "Thoracic extension; lumbar protected; core engaged.", correct: true },
      { id: "B", text: "Lumbar hyperextension; thoracic flexed; core relaxed.", correct: false },
      { id: "C", text: "Axial rotation; lateral flexion; uneven extension.", correct: false },
      { id: "D", text: "Cervical hyperextension; spine collapsed; weak core.", correct: false },
    ],
    lower: [
      { id: "A", text: "Hips extended; knees flexed; ankles dorsiflexed.", correct: true },
      { id: "B", text: "Hips flexed; knees extended; ankles plantarflexed.", correct: false },
      { id: "C", text: "Hips abducted; knees flexed; ankles everted.", correct: false },
      { id: "D", text: "Hips adducted; knees extended; ankles inverted.", correct: false },
    ],
  },
};
