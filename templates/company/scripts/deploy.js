const deployTemplate = require('@aragon/templates-shared/scripts/deploy-template')

const TEMPLATE_NAME = 'company-template'
const CONTRACT_NAME = 'CompanyTemplate'

module.exports = callback => {
  deployTemplate(web3, artifacts, TEMPLATE_NAME, CONTRACT_NAME)
    .then(callback)
    .catch(callback)
}