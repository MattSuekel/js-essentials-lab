// starter data

const rawUserData = [
  { id: 1, full_name: " Alex Rivera ", email: "alex.r@example.com", role: "admin", status: "active", scores: [88, 92, 95] },
  { id: 2, full_name: "jordan smith", email: "jordan.s@example.com", role: "user", status: "inactive", scores: [70, 65, 68] },
  { id: 3, full_name: " TAYLOR SWIFT ", email: "taylor.s@example.com", role: "user", status: "active", scores: [99, 100, 98] },
  { id: 4, full_name: "Morgan Lee", email: "morgan.l@example.com", role: "editor", status: "active", scores: [82, 85, 80] },
  { id: 5, full_name: "samuel green", email: "sam.g@example.com", role: "user", status: "pending", scores: [60, 62, 58] },
  { id: 6, full_name: " Casey Vance ", email: "casey.v@example.com", role: "editor", status: "inactive", scores: [78, 81, 75] },
  { id: 7, full_name: "PATRICK STAR", email: "patrick.s@example.com", role: "user", status: "active", scores: [55, 50, 60] },
  { id: 8, full_name: " Riley Quinn", email: "riley.q@example.com", role: "admin", status: "active", scores: [91, 89, 94] }
];

// data cleaning

const cleanProfiles = (users) => {
  return users.map((user) => {

    const { full_name, scores, ...rest } = user

    const cleanName = full_name
      .toLowerCase()
      .trim()
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ')

    let sum = 0
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i]
    }

    const averageScore = (sum / scores.length)

    return {
      ...rest,
      full_name: cleanName,
      Scores: scores,
      averageScore,
    }
  });
};

// spread and rest took me a minute


// filter active accounts

const filterActiveUsers = (users) => {
  return users.filter(user => user.status === "active")
}


// profile update

const updateUserRole = (users, userId, newRole) => {
  return users.map(user => {
    if (user.id === userId) {
      return { 
        ...user, 
        role: newRole 
      };
    }
    return user;
  });
}
// i pretty much did this when i was cleaning the data but i was not destructuring


// role breakdown

const countUsersByRole = (users) => {
  return users.reduce((count, { role }) => {
    count[role] = (count[role] || 0) + 1;
    return count;
  }, {});
}

// this was a tough one to wrap my head around, 


// summary report

const logUserDirectory = (users) => {
  users.forEach(({ id, full_name, role, averageScore, status }) => {
    console.log(
      `[ID ${id}] ${full_name} (${role.toUpperCase()}) - Avg Score: ${averageScore.toFixed(2)} | Status: ${status.toUpperCase()}`
    )
  });
}




// execution

console.log("=== 1. Cleaned Data ===");
const cleaned = cleanProfiles(rawUserData);
console.log(cleaned);

console.log("\n=== 2. Active Users Only ===");
const activeUsers = filterActiveUsers(cleaned);
console.log(activeUsers);

console.log("\n=== 3. Updated User Role ===");
const updatedList = updateUserRole(cleaned, 2, "admin");
console.log("Original User 2 Role:", cleaned[1].role); // Should still be 'user'
console.log("Updated User 2 Role:", updatedList[1].role); // Should be 'admin'

console.log("\n=== 4. Role Counts ===");
const roleCounts = countUsersByRole(cleaned);
console.log(roleCounts);

console.log("\n=== 5. User Directory Report ===");
logUserDirectory(cleaned);