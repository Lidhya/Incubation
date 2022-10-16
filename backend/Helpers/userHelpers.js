const ApplicationModel=require('../models/applicationModel')

module.exports={

    formSubmission: (formDetails, userId) => {
        formDetails.userId = userId
        // formDetails.status = 'new'
        return new Promise((resolve) => {
            let response = {}
            ApplicationModel.save(formDetails).then((details) => {
                console.log(details);
                response.id = details.insertedId
                resolve(response)
            })
        })
    }
}