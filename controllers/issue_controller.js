const Issue = require('../models/issue');
const Project = require('../models/project');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// creating the issue
module.exports.create = async function (req, res) {
    try {
        let id = req.params.id;
        let project = await Project.findById({
            _id: id
        });

        if (!(req.body.name || req.body.description || req.body.author)) {
            console.log("invalid inputs");
            return res.redirect('back');
        } else {
            var data = {
                title: req.body.title,
                description: req.body.description,
                author: req.body.author,
                labels: req.body.labels
            }
            let issue = await Issue.create(data); // create the issue collection in mongoDb


            project.issues.push(issue._id);
            project.save(); // save the issue to its project.

            // req.flash('success', 'Succssfully created!');
            console.log("successfully created the issue");
            return res.redirect('back');
        }
    } catch (err) {
        //   req.flash('error', 'Unable to create issue!');
        console.log('say hi from issue controller');
        console.log("erorr while posting", err);
        return res.redirect('back');
    }
}
// filter by author
module.exports.author = async function (req, res) {
    console.log(req.query.author);
    console.log(req.params.id);
    const author = req.query.author
    if (!(author)) {
        console.log("invalid inputs");
        return res.redirect('back');
    } else {
        const id = req.params.id;
        let project = await Project.findOne({_id:id})
                            .populate({
                                path: 'issues',
                                match: { author: author }
                            });
        // project = await project.issues.find({author:author});
        //   console.log(id);
        console.log(project);
        console.log(project.issues);
        return res.render('project', {
            title: "issueTracker-Project",
            name: project.name,
            pid: project.id,
            project: project
        });
    }


    return res.redirect('back');
}
// filter by title
module.exports.title = async function (req, res) {
    console.log(req.query.title);
    console.log(req.params.id);
    const title = req.query.title
    if (!(title)) {
        console.log("invalid inputs");
        return res.redirect('back');
    } else {
        const id = req.params.id;
        let project = await Project.findOne({_id:id})
                            .populate({
                                path: 'issues',
                                match: { title: { $regex: title, $options: 'i' } }
                            });
        // project = await project.issues.find({author:author});
        //   console.log(id);
        console.log(project);
        console.log(project.issues);
        return res.render('project', {
            title: "issueTracker-Project",
            name: project.name,
            pid: project.id,
            project: project
        });
    }


    return res.redirect('back');
}
// filter by labels
module.exports.filter = async function (req, res) {
    console.log(req.params.id);
    const labels = req.query.labels;
    console.log(labels);
    if (!(labels)) {
        console.log("invalid inputs");
        return res.redirect('back');
    } else {
        const id = req.params.id;
        let project = await Project.findOne({_id:id})
                            .populate({
                                path: 'issues',
                                match: { labels: { $in: labels } }
                            });
        // project = await project.issues.find({author:author});
        //   console.log(id);
        console.log(project);
        console.log(project.issues);
        return res.render('project', {
            title: "issueTracker-Project",
            name: project.name,
            pid: project.id,
            project: project
        });
    }


    return res.redirect('back');
}