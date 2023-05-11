const Project = require('../models/project'); //importing the project schema 

module.exports.create = async function (req, res) {
    try {
        if (!(req.body.name || req.body.description || req.body.author)) {
            console.log("invalid inputs");
            return res.redirect('/');
        } else {

            var data = {
                name: req.body.name,
                description: req.body.description,
                author: req.body.author,
            }

            let project = await Project.create(data); // create the project collection in mongoDb
            console.log(project);

            // req.flash('success', 'Succssfully posted!');
            console.log("successfully created the project");
            return res.redirect('back');
        }
    } catch (err) {
        //   req.flash('error', 'Unable to post!');
        console.log('say hi from project controller');
        console.log("erorr while posting", err);
        return res.redirect('back');
    }
}

module.exports.project = async function (req, res) {
    try {
        let id = req.params.id;
        let project = await Project.findById({
            _id: id
        }).populate({
            path: 'issues'
        });
        //   console.log(id);
        return res.render('project', {
            title: "issueTracker-Project",
            name: project.name,
            pid: project.id,
            project: project
        });
    } catch (error) {
        return console.log(error);
    }
}