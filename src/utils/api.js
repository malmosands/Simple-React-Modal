/* Frontend code from src/utils/api.js */
/* Api methods to call /functions */

// Payment
const charge = (data) => {
  return fetch('/.netlify/functions/charge', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const getCustomer = (customer) => {
  return fetch(`/.netlify/functions/getCustomer/${customer}`).then(response => {
    return response.json()
  })
}
const getInvoices = (customer) => {
  return fetch(`/.netlify/functions/getInvoices/${customer}`).then(response => {
    return response.json()
  })
}
const getPlans = (product) => {
  return fetch(`/.netlify/functions/getPlans/${product}`).then(response => {
    return response.json()
  })
}
const cancelSubscription = (id) => {
  return fetch(`/.netlify/functions/cancelSubscription/${id}`).then(response => {
    return response.json()
  })
}
const reactivateSubscription = (id) => {
  return fetch(`/.netlify/functions/reactivateSubscription/${id}`).then(response => {
    return response.json()
  })
}

// User
const changePassword = (data) => {
  return fetch('/.netlify/functions/changePassword', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const changeEmail = (data) => {
  return fetch('/.netlify/functions/changeEmail', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

// Items
const create = (data) => {
  return fetch('/.netlify/functions/items-create', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const read = (itemId) => {
  return fetch(`/.netlify/functions/items-read/${itemId}`).then(response => {
    return response.json()
  })
}
const readAll = () => {
  return fetch('/.netlify/functions/items-read-all').then((response) => {
    return response.json()
  })
}
const update = (itemId, data) => {
  return fetch(`/.netlify/functions/items-update/${itemId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}
const deleteItem = (itemId) => {
  return fetch(`/.netlify/functions/items-delete/${itemId}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}
const batchDeleteItem = (itemIds) => {
  return fetch(`/.netlify/functions/items-delete-batch`, {
    body: JSON.stringify({
      ids: itemIds
    }),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

export default {
  charge: charge,
  getCustomer: getCustomer,
  getInvoices: getInvoices,
  getPlans: getPlans,
  cancelSubscription: cancelSubscription,
  reactivateSubscription: reactivateSubscription,

  changePassword: changePassword,
  changeEmail: changeEmail,

  create: create,
  read: read,
  readAll: readAll,
  update: update,
  delete: deleteItem,
  batchDelete: batchDeleteItem
}
