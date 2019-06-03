const SERVER_ADDRESS = 'http://0.0.0.0:5002'

import axios from 'axios'

export default {
    start (token, user, name, description, contact, price, imgFile, callback) {
      let form = new FormData()
      form.append('token', token)
      form.append('user', user)
      form.append('name', name)
      form.append('description', description)
      form.append('contact', contact)
      form.append('price', price)
      form.append('imgFile', imgFile)
      axios.post(SERVER_ADDRESS + '/startorder', form)
        .then(response => callback(response.status))
        .catch(error => callback(error.response.status))
    }
}
