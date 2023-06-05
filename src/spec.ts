import { DataSource } from '../../toolchain/types/spec/spec_source';

export const specification: DataSource.Specification = {
    category:  "webcam",
    id_ident:  "alpencams",
    id_author: "thmang82",
    // ---
    provides: [ "webcam_image" ],
    // ---
    version:   "0.1.0",
    // ---
    author_email: "thmang82@noemail.com",
    translations: {
        'en': { name: "Alpen-Webcams", description: "Webcams from www.foto-webcam.eu" }
    },
    // ---
    parameters: [
        /* Define script parameters here that shall be rendered by the WunderView Config GUI */
        /* See spec in toolchain/types/spec/spec_parameter.ts for help */
        /* You can also use auto complete, or check the examples */
        {
            type: "DropDownList",
            auto_complete: true,
            ident: "webcam",
            translations: {
                'en': { name: "Webcam", description: "The webcam to be used" }
            },
            value_type: "string",
            entries: [
                {
                    name: "Wallberg",
                    value: "wallberg",
                    req_url: "https://www.foto-webcam.org/webcam/wallberg/yyyy/mm/dd/hhmm_hd.jpg"
                },
                {
                    name: "Dietramszell",
                    value: "dietramszell",
                    req_url: "https://www.foto-webcam.org/webcam/dietramszell/yyyy/mm/dd/hhmm_hd.jpg"
                },
                {
                    name: "Zugspitze Ost",
                    value: "zugspitze-ost",
                    req_url: "https://www.foto-webcam.eu/webcam/zugspitze-ost/2021/05/16/0740_hd.jpg"
                },
                {
                    name: "Samerberg",
                    value: "samerberg",
                    req_url: "https://www.foto-webcam.eu/webcam/samerberg/2021/05/16/0740_hd.jpg"
                },
                {
                    name: "Kochelsee",
                    value: "kochelsee",
                    req_url: "https://www.foto-webcam.eu/webcam/kochelsee/2021/05/16/0740_hd.jpg"
                },
                {
                    name: "Buchstein/TegernseerHütte",
                    value: "buchstein",
                    req_url: "https://www.foto-webcam.eu/webcam/buchstein/2021/05/16/0740_hd.jpg"
                },
                {
                    name: "Bozen Blick",
                    value: "gantkofel",
                    req_url: "https://www.foto-webcam.eu/webcam/gantkofel/2021/05/16/0740_hd.jpg"
                }
            ]
        }
    ],
    notifications: [],
    geo_relevance: {
        everywhere: true
    },
    data_fetch: undefined
}