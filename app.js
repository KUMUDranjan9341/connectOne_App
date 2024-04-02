const express = require('express');
const app = express();

app.use(express.static('views'))
app.use('/static',express.static('public'))
const router =express.Router()
app.set('view engine','ejs')
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded ({extended : true}));
// const con= require('./config');
require('./config')
router.get('/',(req,res)=>{
    res.render('login_signup')
})
router.get('/create_profile',(req,res)=>{
    res.render('create_profile')
})
router.get('/business_profile',(req,res)=>{
    res.render('business_profile')
})
router.get('/user_profile',(req,res)=>{
    res.render('user_profile')
})
router.get('/edit_profile',(req,res)=>{
    res.render('edit_profile')
})
router.get('/setting',(req,res)=>{
    res.render('setting')
})
router.get('/customer_profile',(req,res)=>{
    res.render('customer_profile')
})
router.get('/user_profile2',(req,res)=>{
    res.render('user_profile2')
})
router.get('/edit_profile_profe',(req,res)=>{
    res.render('edit_profile_profe')
})
router.get('/home',(req,res)=>{
    res.render('home')
})
router.get('/idea_page_main',(req,res)=>{
    res.render('idea_page')
})
router.get('/idea_page',(req,res)=>{
    res.render('idea')
})
router.get('/discussion',(req,res)=>{
    res.render('discussion')
})
router.get('/find_pro',(req,res)=>{
    res.render('find_pro')
})
router.get('/help',(req,res)=>{
    res.render('help')
})
router.get('/project_location',(req,res)=>{
    res.render('pg1_project_location')
})
router.get('/project_details_1',(req,res)=>{
    res.render('pg2_project_details_1')
})
router.get('/project_details_2',(req,res)=>{
    res.render('pg3_project_details_2')
})
router.get('/project_details_3',(req,res)=>{
    res.render('pg4_project_details_3')
})
router.get('/project_details_4',(req,res)=>{
    res.render('pg5_project_details_4')
})
router.get('/project_details_5',(req,res)=>{
    res.render('pg6_project_details_5')
})
router.get('/project_details_6',(req,res)=>{
    res.render('pg7_project_details_6')
})
router.get('/contact_details_1',(req,res)=>{
    res.render('pg8_contact_details_1')
})
router.get('/contact_details_2',(req,res)=>{
    res.render('pg9_contact_details_2')
})
router.get('/reqirement_pros',(req,res)=>{
    res.render('reqirement_pros')
})
router.get('/help_contact',(req,res)=>{
    res.render('help_contact')
})
router.get('/notification',(req,res)=>{
    res.render('notification')
})
router.get('/messages',(req,res)=>{
    res.render('messages')
})
router.get('/ideabook',(req,res)=>{
    res.render('ideabook')
})
// login 
router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/yourself',(req,res)=>{
    res.render('yourself')
})

router.get('/current_location',(req,res)=>{
    res.render('current_location')
})
router.get('/f_password',(req,res)=>{
    res.render('f_password')
})
// router.get('/login_signup',(req,res)=>{
//     res.render('login_signup')
// })

router.get('/newsletter',(req,res)=>{
    res.render('newsletter')
})
// Sub Pages for user profile
router.get('/followings',(req,res)=>{
    res.render('followings')
})
router.get('/folowers',(req,res)=>{
    res.render('folowers')
})
router.get('/your_updates',(req,res)=>{
    res.render('your_updates')
})
router.get('/activity',(req,res)=>{
    res.render('activity')
})
router.get('/post',(req,res)=>{
    res.render('post')
})
router.get('/history',(req,res)=>{
    res.render('history')
})
router.get('/support',(req,res)=>{
    res.render('support')
})
// sub page for business profile
router.get('/your_project',(req,res)=>{
    res.render('your_project')
})
router.get('/upload_project_photo',(eq,res)=>{
    res.render('upload_project_photo')
})
router.get('/project_title_location',(req,res)=>{
    res.render('project_title_location')
})
router.get('/select_cover_photo',(req,res)=>{
    res.render('select_cover_photo')
})
router.get('/select_style_cost',(req,res)=>{
    res.render('select_style_cost')
})
router.get('/describe_this_project',(req,res)=>{
    res.render('describe_this_project')
})
router.get('/review_your_project',(req,res)=>{
    res.render('review_your_project')
})
router.get('/pubic_profile',(req,res)=>{
    res.render('pubic_profile')
})

// demo  start
router.get('/form',(req,res)=>{
    res.render('form')
})
router.get('/line',(req,res)=>{
    res.render('line')
})

router.get('/project_d',(req,res)=>{
    res.render('project_d')

})

// demo end
// bhaskar 

router.get('/profile',(req,res)=>{
    res.render('profile')
})
router.get('/stories',(req,res)=>{
    res.render('stories')
})
router.get('/pro_page',(req,res)=>{
    res.render('pro_page')
})

router.get('/idea_page_3',(req,res)=>{
    res.render('idea_page_3')
})










app.use('/',router)
app.listen(2000)