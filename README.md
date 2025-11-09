#include <stdio.h>
#include <stdlib.h>

int main() {
    int score = 0;
    int answer;
    char name[50];

    printf("=========================================\n");
    printf("🤖 Welcome to your C Language Quiz Assistant!\n");
    printf("=========================================\n\n");

    printf("👋 Please enter your name: ");
    scanf("%s", name);

    printf("\nHello, %s! Let's begin your C programming quiz. 😄\n", name);
    printf("Each correct answer gives you 1 point.\n");
    printf("Let's get started!\n\n");

    // Question 1
    printf("1️⃣  Who is known as the father of C language?\n");
    printf("   1. James Gosling\n");
    printf("   2. Dennis Ritchie\n");
    printf("   3. Bjarne Stroustrup\n");
    printf("   4. Ken Thompson\n");
    printf("👉 Enter your answer (1-4): ");
    scanf("%d", &answer);
    if (answer == 2) {
        printf("✅ Correct, %s! Dennis Ritchie developed the C language.\n\n", name);
        score++;
    } else {
        printf("❌ Oops! The correct answer is Dennis Ritchie.\n\n");
    }

    // Question 2
    printf("2️⃣  Which data type is used to store a single character?\n");
    printf("   1. int\n");
    printf("   2. char\n");
    printf("   3. float\n");
    printf("   4. string\n");
    printf("👉 Enter your answer (1-4): ");
    scanf("%d", &answer);
    if (answer == 2) {
        printf("✅ Well done, %s!\n\n", name);
        score++;
    } else {
        printf("❌ Incorrect! The correct answer is 'char'.\n\n");
    }

    // Question 3
    printf("3️⃣  Which symbol marks the end of a statement in C?\n");
    printf("   1. . (dot)\n");
    printf("   2. : (colon)\n");
    printf("   3. ; (semicolon)\n");
    printf("   4. , (comma)\n");
    printf("👉 Enter your answer (1-4): ");
    scanf("%d", &answer);
    if (answer == 3) {
        printf("✅ Correct, %s!\n\n", name);
        score++;
    } else {
        printf("❌ Wrong! The correct answer is ';'.\n\n");
    }

    // Question 4
    printf("4️⃣  What is the correct format specifier for printing an integer?\n");
    printf("   1. %%d\n");
    printf("   2. %%f\n");
    printf("   3. %%c\n");
    printf("   4. %%s\n");
    printf("👉 Enter your answer (1-4): ");
    scanf("%d", &answer);
    if (answer == 1) {
        printf("✅ Great job, %s!\n\n", name);
        score++;
    } else {
        printf("❌ Nope! The correct answer is %%d.\n\n");
    }

    // Question 5
    printf("5️⃣  Which function is used to take input from the user in C?\n");
    printf("   1. printf()\n");
    printf("   2. get()\n");
    printf("   3. scanf()\n");
    printf("   4. input()\n");
    printf("👉 Enter your answer (1-4): ");
    scanf("%d", &answer);
    if (answer == 3) {
        printf("✅ Correct again, %s!\n\n", name);
        score++;
    } else {
        printf("❌ Sorry! The correct answer is scanf().\n\n");
    }

    // Final Result
    printf("=========================================\n");
    printf("🎯 Quiz Over, %s!\n", name);
    printf("📊 Your Final Score: %d out of 5\n", score);
    printf("=========================================\n");

    if (score == 5)
        printf("🏆 Excellent, %s! You are a C Master!\n", name);
    else if (score >= 3)
        printf("👍 Good job, %s! You know C pretty well.\n", name);
    else
        printf("🙂 Keep learning, %s! Practice makes perfect.\n", name);

    printf("=========================================\n");
    printf("🤖 Thank you for playing the C Quiz Assistant!\n");
    printf("=========================================\n");

    return 0;
} 
