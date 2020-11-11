//write your code here to make the tests pass

class Document{
    constructor(EmployeeName){
        this.EmployeeName = EmployeeName

    }
}

class Employee{
    constructor(name)
    {
        this.name = name;
    }

    work(office)
    {
        for(let i=0; i<10; i++)
        {
            const d = new Document(this.name)
            office.documents.push(d)
        }
    }
 
}

class Manager{
    constructor(name)
    {
        this.employees = []
        this.name = name
    }

    hireEmployee(name)
    {
        const e = new Employee(name)
        this.employees.push(e)
    }

    askEmployeesToWork(office)
    {
        for(let employee of this.employees)
        {
            employee.work(office)
        }
    }
}


class Cleaner{
    constructor(name)
    {
        this.name = name;
    }
    clean()
    {
        console.log("Clean")
    }
}


class Office{
    constructor()
    {
        this.documents = []
        this.managers = []
        this.cleaners = []

    }
    hireCleaner(name)
    {
        const c = new Cleaner(name)
        this.cleaners.push(c)
    }
    hireManager(name)
    {
        const m = new Manager(name)
        this.managers.push(m)
    }

    startWorkDay()
    {
        for(let manager of this.managers)
        {
            manager.askEmployeesToWork(this)
        }
        for(let cleaner of this.cleaners)
        {
            cleaner.clean()
        }
    }

}