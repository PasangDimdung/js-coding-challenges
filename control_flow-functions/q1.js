function gradeScore(score){
    if(score >= 90 && score <= 100)
    {
        return "A";
    }
    else if(score >= 80 && score <= 89)
    {
        return "B";
    }
    else if(score >= 50 && score <= 88)
    {
        return "C";
    }
    else if(score >= 0 && score <= 49)
    {
        return "D";
    }
    else
    {
        return "Invalid.";
    }
}

console.log(gradeScore(100));
console.log(gradeScore(85));
console.log(gradeScore(88));
console.log(gradeScore(2));
console.log(gradeScore(101));
