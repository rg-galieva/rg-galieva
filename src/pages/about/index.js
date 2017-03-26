import React, {PropTypes} from 'react'
import s from './_styles.css'

const sf = require('./svg/sf.svg');

export default function () {
    return (
        <div className={s.wrap}>
            <div dangerouslySetInnerHTML={{__html: sf}} className={s.sf_svg}></div>

            <section className={['row', s.cont].join(' ')}>
                <header className="col_4"><h2>About me</h2></header>
                <div className="col_10">
                    <div className={s.desc}>
                        <p>Dear guest,<br />
                        Nice to see you! Greetings from San Francisco!</p>
                        <p> Did I promise to tell about myself if you visit my web page? Let’s get started!</p>

                        <p>The story of my relationships with web technologies begins in the distant 1999. When I
                            created
                            my first HTML-page about cats for programming class in the middle school. That page was
                            awesome.
                            I got a five for diligence and left to grow up. In 2008 we met again. But this time it was a
                            serious long-term partnership.</p>

                        <p>Since that time I've seen a lot. Battle of table and div layouts. I fought for divs.
                            Carefully
                            glued image sprites to create rounded borders. Yes, I was dreaming about border-radius for
                            so
                            long. I saw the dawn and sunset of jQuery. I remember how all script tags were moved from
                            the
                            head to the end of body all around the web. Bragged to server developers with my application
                            on Express.</p>

                        <p>In mid-2012, I was bored and I plunged into the world of server Java development. After 6
                            months of debugging errors in the console, I decided to test the sass, Backbone, and grunt.
                            After that, I could not find the strength to come back.</p>


                        <p>Todays I would love to create PWA and score 100 points on Google Lighthouse, write an app
                            about barware (or whatever ware)) using React-native. And find a dream team to work together
                            on great projects!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}