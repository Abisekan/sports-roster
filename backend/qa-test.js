async function runQATests() {
  console.log("🚀 Starting QA Automation Suite...\n");

  try {
    // Robot Step 1: Fetch data from the running server
    const response = await fetch("http://localhost:5000/api/players");

    // Robot Step 2: Check the network status
    if (response.status === 200) {
      console.log("✅ TEST 1 PASSED: API is awake and returned 200 OK");
    } else {
      console.error(
        `❌ TEST 1 FAILED: Expected 200, but got ${response.status}`,
      );
    }

    // Robot Step 3: Check the actual data structure
    const data = await response.json();
    if (Array.isArray(data)) {
      console.log(
        "✅ TEST 2 PASSED: API successfully returned a list of players",
      );
      console.log(`   -> Found ${data.length} players in the database.\n`);
    } else {
      console.error("❌ TEST 2 FAILED: API did not return an array format");
    }

    console.log("🏁 All automated API tests complete!");
  } catch (error) {
    console.error("\n❌ CRITICAL ERROR: The server is offline!");
    console.error(
      "Make sure your backend server is running on port 5000 before testing.",
    );
  }
}

// Run the robot
runQATests();
