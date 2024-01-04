// Sample data
const data = [
  {
    id: 1,
    assignments: [
      { id: 1, score: 80, points_possible: 100 },
      { id: 2, score: 190, points_possible: 200 },
      { id: 3, score: 70, points_possible: 100 },
    ],
  },
  {
    id: 2,
    assignments: [
      { id: 1, score: 90, points_possible: 100 },
      { id: 2, score: 180, points_possible: 200 },
      { id: 3, score: 80, points_possible: 100 },
    ],
  },
];

// Function to calculate weighted average
function calculateWeightedAverage(assignments) {
  let totalScore = 0;
  let totalPoints = 0;

  assignments.forEach((assignment) => {
    totalScore += assignment.score;
    totalPoints += assignment.points_possible;
  });

  return (totalScore / totalPoints) * 100;
}

// Function to transform data
function transformData(data) {
  const transformedData = [];

  data.forEach((learner) => {
    const transformedLearner = {
      id: learner.id,
      avg: calculateWeightedAverage(learner.assignments),
    };

    learner.assignments.forEach((assignment) => {
      transformedLearner[assignment.id] =
        (assignment.score / assignment.points_possible) * 100;
    });

    transformedData.push(transformedLearner);
  });

  return transformedData;
}

// Call the transformData function
const transformedData = transformData(data);

console.log(transformedData);