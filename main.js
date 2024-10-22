#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.magentaBright.bold.italic.underline("\t\t WELCOME TO THE OBJECT-ORIENTED PROGRAMME OF SANDLEEN WASEEM"));
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: chalk.blueBright.bold("Who Would You Like to Speak With?"),
            choices: ["Sandleen Waseem", "Student"],
        });
        if (ans.select == "Sandleen Waseem") {
            console.log(chalk.redBright.bold(`\t\tYou're talking to ${chalk.bold.magentaBright("Sandleen Waseem")}`));
            console.log(chalk.cyanBright.bold("\t\tI hope all is well with you.!!"));
        }
        if (ans.select == "Student") {
            const answer = await inquirer.prompt({
                type: "input",
                name: "student",
                message: chalk.blueBright.bold("Which student would you like to speak with? "),
            });
            const student = persons.students.find((val) => val.name == answer.student);
            if (!student) {
                const name = new Student(answer.student);
                persons.addStudent(name);
                console.log(chalk.magentaBright.bold(`\t\tI am ${name.name}, and I am Good!! `));
                console.log(persons.students);
            }
            if (student) {
                console.log(chalk.magentaBright.bold(`Hello, I am ${student.name} and I am Good!!....`));
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
