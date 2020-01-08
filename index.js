//@ts-check
const { Photon } = require('@prisma/photon')

const photon = new Photon()

async function handler() {
  const users = await photon.users.findMany()
  return users
}

module.exports = { handler }
