module.exports = [
    `
    create table user(
        userId varchar(20) not null primary key,
        username varchar(30),
        password varchar(20)
    );
    `,
    `
    create table source(
        sourceId varchar(20) not null primary key,
        userId varchar(20) foreign key references user(userId),
        sourceName varchar(20)
    );
    `,
    `
    create table expense(
        expenseId varchar(20),
        userId varchar(20) foreign key references user(userId),
        sourceId varchar(20) foreign key references source(Id),
        amount decimal(10, 2)
    );
    `,
]