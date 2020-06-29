enum Role  {ADMIN, USER};               // ADMIN = 0, USER = 1
enum Role1 {ADMIN = 1, USER};           // ADMIN = 1, USER = 2
enum Role2 {ADMIN = 1, USER = 3};       // ADMIN = 1, USER = 3
enum Role3 {ADMIN, USER = 3};           // ADMIN = 0, USER = 3
enum Role4 {ADMIN='Admin', USER = 3};   // ADMIN = 'Admin', USER = 3

const person = {
    name: 'Amol', // string
    age: 30, // number
    role: Role.ADMIN //enum
}