const Url=require("../models/url") 

module.exports={

    addUrl: async (req, res) => {
        try {
          const url = new Url({ fullUrl: req.body.fullUrl });
          await url.save();
          res.redirect('/');
        } catch (error) {
          res.status(500).send('Invalid URL');
        }
      },
      getUrl:async (req, res) => {
        try {
          const urls = await Url.find().lean();
          res.status(200).render("url", {layout:"index", urls });
          //res.status(200).json(urls);
        } catch (error) {
          res.status(500).send('Internal server error');
        }
      },


      getShortUrl: async (req, res) => {
        try {
          const shortUrl = req.params.shortUrl;
          const url = await Url.findOne({ shortUrl });
          if (!url) {
            return res.status(400).send('URL not found');
          }
       // Increment the click count and save the updated URL
          url.clicks++;
          url.save();
          res.redirect(url.fullUrl);
        } catch (error) {
          res.status(500).send('URL not found');
        }
      },


      deleteUrl:(req, res) => {
        // פונקציה למחיקת מסמך
        let _id = req.params.id; // השגת מזהה מהבקשה
        Url.deleteOne({ _id }).then((data) => {
          // מחיקת המסמך לפי המזהה
          return res.status(200).json(data); // החזרת נתונים על המחיקה בפורמט JSON
        });
        },

}; 
