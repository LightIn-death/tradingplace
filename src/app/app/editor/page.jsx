'use client'
import CardPreview from '../../../components/CardPreview'
import {pb} from '../../../lib/pocketbase'
import {useState} from 'react'


export default function EditorPage() {
    const [formData, setFormData] = useState(new FormData())
    const [image, setImage] = useState(null)

    const handleChange = e => {
        console.log(formData)
        const {name, value} = e.target
        let data = formData
        data.set(name, value)
        setFormData(data)
    }

    const handleFileChange = (file) => {
        console.log(file)
        setImage(file)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        console.log('submit', formData)
        console.log(formData)
        if (image) {
            let data = formData
            data.append('image', image)
            setFormData(data)
        }
        await pb.collection('propositioncards').create(formData)
    }

    return (
        <div className="container ">
            <main className=" flex w-full justify-center p-8">
                <form className="form-container w-1/2" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Nom"
                        onChange={handleChange}
                        className="mb-4 w-full rounded border p-2"
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                        className="mb-4 w-full rounded border p-2"
                    />
                    <input
                        type="text"
                        name="rarity"
                        placeholder="Rareté"
                        onChange={handleChange}
                        className="mb-4 w-full rounded border p-2"
                    />

                    {/* Input pour des images */}
                    <div className="flex w-full items-center justify-center">
                        <label
                            htmlFor="dropzone-file"
                            className={`dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 
                           bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
                        >
                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                {!image && (
                                    <svg
                                        className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                    </svg>
                                )}

                                {image && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="100"
                                        height="100"
                                        viewBox="0 0 100 100"
                                    >
                                        <path
                                            fill="#c7ede6"
                                            d="M87.215,56.71C88.35,54.555,89,52.105,89,49.5c0-6.621-4.159-12.257-10.001-14.478 C78.999,35.015,79,35.008,79,35c0-11.598-9.402-21-21-21c-9.784,0-17.981,6.701-20.313,15.757C36.211,29.272,34.638,29,33,29 c-7.692,0-14.023,5.793-14.89,13.252C12.906,43.353,9,47.969,9,53.5C9,59.851,14.149,65,20.5,65c0.177,0,0.352-0.012,0.526-0.022 C21.022,65.153,21,65.324,21,65.5C21,76.822,30.178,86,41.5,86c6.437,0,12.175-2.972,15.934-7.614C59.612,80.611,62.64,82,66,82 c4.65,0,8.674-2.65,10.666-6.518C77.718,75.817,78.837,76,80,76c6.075,0,11-4.925,11-11C91,61.689,89.53,58.727,87.215,56.71z"
                                        ></path>
                                        <path
                                            fill="#fdfcef"
                                            d="M79.875,60.5c0,0,3.64,0,6.125,0s4.5-2.015,4.5-4.5c0-2.333-1.782-4.229-4.055-4.455 C86.467,51.364,86.5,51.187,86.5,51c0-2.485-2.015-4.5-4.5-4.5c-1.438,0-2.703,0.686-3.527,1.736 C78.333,45.6,76.171,43.5,73.5,43.5c-2.761,0-5,2.239-5,5c0,0.446,0.077,0.87,0.187,1.282C68.045,49.005,67.086,48.5,66,48.5 c-1.781,0-3.234,1.335-3.455,3.055C62.364,51.533,62.187,51.5,62,51.5c-2.485,0-4.5,2.015-4.5,4.5s2.015,4.5,4.5,4.5s9.5,0,9.5,0 h5.375V61h3V60.5z"
                                        ></path>
                                        <path
                                            fill="#472b29"
                                            d="M73.5,43c-3.033,0-5.5,2.467-5.5,5.5c0,0.016,0,0.031,0,0.047C67.398,48.192,66.71,48,66,48 c-1.831,0-3.411,1.261-3.858,3.005C62.095,51.002,62.048,51,62,51c-2.757,0-5,2.243-5,5s2.243,5,5,5h14.875 c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H62c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.117,0,0.23,0.017,0.343,0.032l0.141,0.019 c0.021,0.003,0.041,0.004,0.062,0.004c0.246,0,0.462-0.185,0.495-0.437C63.232,50.125,64.504,49,66,49 c0.885,0,1.723,0.401,2.301,1.1c0.098,0.118,0.241,0.182,0.386,0.182c0.078,0,0.156-0.018,0.228-0.056 c0.209-0.107,0.314-0.346,0.254-0.573C69.054,49.218,69,48.852,69,48.5c0-2.481,2.019-4.5,4.5-4.5 c2.381,0,4.347,1.872,4.474,4.263c0.011,0.208,0.15,0.387,0.349,0.45c0.05,0.016,0.101,0.024,0.152,0.024 c0.15,0,0.296-0.069,0.392-0.192C79.638,47.563,80.779,47,82,47c2.206,0,4,1.794,4,4c0,0.117-0.017,0.23-0.032,0.343l-0.019,0.141 c-0.016,0.134,0.022,0.268,0.106,0.373c0.084,0.105,0.207,0.172,0.34,0.185C88.451,52.247,90,53.949,90,56c0,2.206-1.794,4-4,4 h-6.125c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H86c2.757,0,5-2.243,5-5c0-2.397-1.689-4.413-4.003-4.877 C86.999,51.082,87,51.041,87,51c0-2.757-2.243-5-5-5c-1.176,0-2.293,0.416-3.183,1.164C78.219,44.76,76.055,43,73.5,43L73.5,43z"
                                        ></path>
                                        <path
                                            fill="#472b29"
                                            d="M72 50c-1.403 0-2.609.999-2.913 2.341C68.72 52.119 68.301 52 67.875 52c-1.202 0-2.198.897-2.353 2.068C65.319 54.022 65.126 54 64.938 54c-1.529 0-2.811 1.2-2.918 2.732C62.01 56.87 62.114 56.99 62.251 57c.006 0 .012 0 .018 0 .13 0 .24-.101.249-.232.089-1.271 1.151-2.268 2.419-2.268.229 0 .47.042.738.127.022.007.045.01.067.01.055 0 .11-.02.156-.054C65.962 54.537 66 54.455 66 54.375c0-1.034.841-1.875 1.875-1.875.447 0 .885.168 1.231.473.047.041.106.063.165.063.032 0 .063-.006.093-.019.088-.035.148-.117.155-.212C69.623 51.512 70.712 50.5 72 50.5c.208 0 .425.034.682.107.023.007.047.01.07.01.109 0 .207-.073.239-.182.038-.133-.039-.271-.172-.309C72.517 50.04 72.256 50 72 50L72 50zM85.883 51.5c-1.326 0-2.508.897-2.874 2.182-.038.133.039.271.172.309C83.205 53.997 83.228 54 83.25 54c.109 0 .209-.072.24-.182C83.795 52.748 84.779 52 85.883 52c.117 0 .23.014.342.029.012.002.023.003.035.003.121 0 .229-.092.246-.217.019-.137-.077-.263-.214-.281C86.158 51.516 86.022 51.5 85.883 51.5L85.883 51.5z"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M15.405 51H5.5C5.224 51 5 50.776 5 50.5S5.224 50 5.5 50h9.905c.276 0 .5.224.5.5S15.682 51 15.405 51zM18.5 51h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5S18.777 51 18.5 51zM23.491 53H14.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8.991c.276 0 .5.224.5.5S23.767 53 23.491 53zM12.5 53h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5S12.777 53 12.5 53zM9.5 53h-2C7.224 53 7 52.776 7 52.5S7.224 52 7.5 52h2c.276 0 .5.224.5.5S9.777 53 9.5 53zM15.5 55h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S15.776 55 15.5 55zM18.5 46c-.177 0-.823 0-1 0-.276 0-.5.224-.5.5 0 .276.224.5.5.5.177 0 .823 0 1 0 .276 0 .5-.224.5-.5C19 46.224 18.776 46 18.5 46zM18.5 48c-.177 0-4.823 0-5 0-.276 0-.5.224-.5.5 0 .276.224.5.5.5.177 0 4.823 0 5 0 .276 0 .5-.224.5-.5C19 48.224 18.776 48 18.5 48zM23.5 50c-.177 0-2.823 0-3 0-.276 0-.5.224-.5.5 0 .276.224.5.5.5.177 0 2.823 0 3 0 .276 0 .5-.224.5-.5C24 50.224 23.776 50 23.5 50z"
                                        ></path>
                                        <g>
                                            <path
                                                fill="#fff"
                                                d="M72.5 24h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5S72.776 24 72.5 24zM76.5 24h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S76.776 24 76.5 24zM81.5 26h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5S81.777 26 81.5 26zM69.5 26h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5S69.776 26 69.5 26zM66.375 26H64.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.875c.276 0 .5.224.5.5S66.651 26 66.375 26zM75.5 22h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5S75.777 22 75.5 22zM72.5 28h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S72.776 28 72.5 28z"
                                            ></path>
                                        </g>
                                        <g>
                                            <path
                                                fill="#00a698"
                                                d="M37,71.3c-4.025,0-7.3-3.274-7.3-7.3V36c0-4.025,3.274-7.3,7.3-7.3h28c4.025,0,7.3,3.274,7.3,7.3 v28c0,4.025-3.274,7.3-7.3,7.3H37z"
                                            ></path>
                                            <path
                                                fill="#472b29"
                                                d="M65,29.4c3.639,0,6.6,2.961,6.6,6.6v28c0,3.639-2.961,6.6-6.6,6.6H37c-3.639,0-6.6-2.961-6.6-6.6 V36c0-3.639,2.961-6.6,6.6-6.6H65 M65,28H37c-4.418,0-8,3.582-8,8v28c0,4.418,3.582,8,8,8h28c4.418,0,8-3.582,8-8V36 C73,31.582,69.418,28,65,28L65,28z"
                                            ></path>
                                        </g>
                                        <g>
                                            <path
                                                fill="#472b29"
                                                d="M68.445,47.511c-0.276,0-0.5-0.224-0.5-0.5v-3.706c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5 v3.706C68.945,47.287,68.722,47.511,68.445,47.511z"
                                            ></path>
                                        </g>
                                        <g>
                                            <path
                                                fill="#472b29"
                                                d="M68.508,41.06c-0.276,0-0.5-0.224-0.5-0.5v-1.913c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5 v1.913C69.008,40.836,68.784,41.06,68.508,41.06z"
                                            ></path>
                                        </g>
                                        <g>
                                            <path
                                                fill="#472b29"
                                                d="M64.251,67.938H37.812c-2.619,0-4.749-2.131-4.749-4.749V36.749c0-2.618,2.13-4.749,4.749-4.749 h23.961c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5H37.812c-2.067,0-3.749,1.682-3.749,3.749v26.439 c0,2.067,1.682,3.749,3.749,3.749h26.439c2.067,0,3.749-1.682,3.749-3.749V49.614c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5 v13.574C69,65.807,66.869,67.938,64.251,67.938z"
                                            ></path>
                                        </g>
                                        <g>
                                            <path
                                                fill="#fdfcef"
                                                d="M36.5,73.5c0,0,1.567,0,3.5,0s3.5-1.567,3.5-3.5c0-1.781-1.335-3.234-3.055-3.455 C40.473,66.366,40.5,66.187,40.5,66c0-1.933-1.567-3.5-3.5-3.5c-1.032,0-1.95,0.455-2.59,1.165 c-0.384-1.808-1.987-3.165-3.91-3.165c-2.209,0-4,1.791-4,4c0,0.191,0.03,0.374,0.056,0.558C26.128,64.714,25.592,64.5,25,64.5 c-1.228,0-2.245,0.887-2.455,2.055C22.366,66.527,22.187,66.5,22,66.5c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5s7.5,0,7.5,0 V74h7V73.5z"
                                            ></path>
                                            <path
                                                fill="#472b29"
                                                d="M38.25 69C38.112 69 38 68.888 38 68.75c0-1.223.995-2.218 2.218-2.218.034.009.737-.001 1.244.136.133.036.212.173.176.306-.036.134-.173.213-.306.176-.444-.12-1.1-.12-1.113-.118-.948 0-1.719.771-1.719 1.718C38.5 68.888 38.388 69 38.25 69zM31.5 73A.5.5 0 1 0 31.5 74 .5.5 0 1 0 31.5 73z"
                                            ></path>
                                            <path
                                                fill="#472b29"
                                                d="M40,74h-3.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5H40c1.654,0,3-1.346,3-3 c0-1.496-1.125-2.768-2.618-2.959c-0.134-0.018-0.255-0.088-0.336-0.196s-0.115-0.244-0.094-0.377C39.975,66.314,40,66.16,40,66 c0-1.654-1.346-3-3-3c-0.85,0-1.638,0.355-2.219,1c-0.125,0.139-0.321,0.198-0.5,0.148c-0.182-0.049-0.321-0.195-0.36-0.379 C33.58,62.165,32.141,61,30.5,61c-1.93,0-3.5,1.57-3.5,3.5c0,0.143,0.021,0.28,0.041,0.418c0.029,0.203-0.063,0.438-0.242,0.54 c-0.179,0.102-0.396,0.118-0.556-0.01C25.878,65.155,25.449,65,25,65c-0.966,0-1.792,0.691-1.963,1.644 c-0.048,0.267-0.296,0.446-0.569,0.405C22.314,67.025,22.16,67,22,67c-1.654,0-3,1.346-3,3s1.346,3,3,3h7.5 c0.276,0,0.5,0.224,0.5,0.5S29.776,74,29.5,74H22c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.059,0,0.116,0.002,0.174,0.006 C22.588,64.82,23.711,64,25,64c0.349,0,0.689,0.061,1.011,0.18C26.176,61.847,28.126,60,30.5,60c1.831,0,3.466,1.127,4.153,2.774 C35.333,62.276,36.155,62,37,62c2.206,0,4,1.794,4,4c0,0.048-0.001,0.095-0.004,0.142C42.739,66.59,44,68.169,44,70 C44,72.206,42.206,74,40,74z"
                                            ></path>
                                            <path
                                                fill="#472b29"
                                                d="M34.5,73c-0.159,0-0.841,0-1,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.159,0,0.841,0,1,0c0.276,0,0.5-0.224,0.5-0.5C35,73.224,34.776,73,34.5,73z"
                                            ></path>
                                        </g>
                                        <g>
                                            <path
                                                fill="#fefdef"
                                                d="M48.4,59.543c-0.357,0-0.716-0.129-1-0.387l-8.914-8.914c-0.607-0.551-0.651-1.492-0.1-2.099 c0.552-0.605,1.491-0.652,2.099-0.1l7.895,7.988l13.114-13.169c0.596-0.563,1.535-0.538,2.1,0.06c0.564,0.597,0.537,1.536-0.06,2.1 L49.419,59.137C49.134,59.407,48.767,59.543,48.4,59.543z"
                                            ></path>
                                            <path
                                                fill="#472b29"
                                                d="M48.4,59.793c-0.433,0-0.848-0.16-1.168-0.452l-8.923-8.923c-0.334-0.303-0.535-0.729-0.557-1.193 c-0.022-0.463,0.138-0.907,0.45-1.25c0.645-0.707,1.744-0.76,2.451-0.116l7.728,7.818l12.937-12.991 c0.342-0.323,0.78-0.517,1.245-0.479c0.464,0.013,0.895,0.206,1.213,0.543s0.487,0.778,0.474,1.241 c-0.013,0.463-0.206,0.894-0.543,1.213l-14.11,14.109C49.269,59.624,48.846,59.793,48.4,59.793z M39.49,47.906 c-0.336,0-0.674,0.136-0.919,0.404c-0.222,0.244-0.335,0.561-0.32,0.891s0.158,0.634,0.402,0.854l8.923,8.924 c0.445,0.403,1.218,0.404,1.67-0.024l14.11-14.109c0.5-0.474,0.522-1.257,0.055-1.752c-0.228-0.24-0.533-0.378-0.863-0.387 c-0.327-0.022-0.643,0.11-0.883,0.337L48.38,56.386l-8.073-8.167C40.077,48.01,39.784,47.906,39.49,47.906z"
                                            ></path>
                                        </g>
                                    </svg>
                                )}

                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
									<span className="font-semibold">
										{image
                                            ? image.name.match(`[^\\\\]+$`)[0]
                                            : 'Click to upload'}
									</span>
                                </p>

                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag
                                    and drop
                                </p>

                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                name="image"
                                onChange={(e) => handleFileChange(e.target.files?.[0])}
                            />
                        </label>
                    </div>

                    {/* Et plus de champs ici... */}
                    <button
                        className="rounded bg-blue-500 p-2 text-white"
                        type={'submit'}
                    >
                        Proposer la Carte
                    </button>
                </form>
                <div className="preview-container w-1/2">
                    <CardPreview image={image} title={formData.title}/>
                </div>
            </main>
        </div>
    )
}
