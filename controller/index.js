// var users = require("../models/queries/users");

// module.exports = {
//   sign: {
//     signin: async function(req, res) {
//       try {
//         const data = await sign.signin(req, res);
//         res.status(200);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     signout: async function(req, res) {
//       try {
//         const data = await sign.signout(req, res);
//         res.status(201);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     checkSign: async function(req, res) {
//       try {
//         const data = await sign.checkSign(req, res);
//         res.status(201);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   },

//   user: {
//     checkId: async function(req, res) {
//       try {
//         const data = await users.checkId(req, res);
//         res.status(200);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     signUp: async function(req, res) {
//       try {
//         const data = await users.signUp(req, res);
//         res.status(201);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     infoFix: async function(req, res) {
//       try {
//         const data = await users.infoFix(req, res);
//         res.status(200);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     withdrawal: async function(req, res) {
//       try {
//         const data = await users.withdrawal(req, res);
//         res.status(201);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   },

//   board: {
//     createBoard: async function(req, res) {
//       try {
//         const data = await board.createBoard(req, res);
//         res.status(201);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     getBoard: async function(req, res) {
//       try {
//         const data = await board.getBoard(req, res);
//         res.status(200);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   },
//   container: {
//     createContainer: async function(req, res) {
//       try {
//         const data = await board.createContainer(req, res);
//         res.status(201);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     editContainer: async function(req, res) {
//       try {
//         const data = await board.editContainer(req, res);
//         res.status(200);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     deleteContainer: async function(req, res) {
//       try {
//         const data = await board.deleteContainer(req, res);
//         res.status(201);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   },

//   card: {
//     createCard: async function(req, res) {
//       try {
//         const data = await card.createCard(req, res);
//         res.status(201);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     editCard: async function(req, res) {
//       try {
//         const data = await card.editCard(req, res);
//         res.status(200);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     },
//     deleteCard: async function(req, res) {
//       try {
//         const data = await card.deleteCard(req, res);
//         res.status(201);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   }
// };
