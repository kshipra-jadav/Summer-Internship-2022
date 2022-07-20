import React, { KeyboardEvent, KeyboardEventHandler, MouseEventHandler, MouseEvent, useEffect, useState } from 'react'
import './App.css'
import axios, { AxiosResponse } from "axios"
import { ImageResponse } from "./types"
const JSONData: ImageResponse = require('./data.json')

function App() {
	useEffect(() => {
		document.title = "Unsplash Images Search"
		setData(JSONData)
		
	}, [])
	const [data, setData] = useState<ImageResponse>()
	const handleEnter: KeyboardEventHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code !== "Enter") return
		const searchTerm = e.target.value
		e.target.value = ""
		try {
			const response: AxiosResponse = await axios.get(`https://api.unsplash.com/search/photos?query=${ searchTerm }`, {
				headers: {
					"Authorization": `Client-ID ${ process.env.REACT_APP_CLIENT_ID }`
				}
			})
			setData(response.data)
		} catch (e) {
			if (axios.isAxiosError(e)) {
				console.log(e)
			} else {
				console.log('unknown error occurred')
			}
		}
		
	}
	const handleHoverStart: MouseEventHandler = (e: MouseEvent<HTMLDivElement> & {target: Element }) => {
		console.log(e.target.childNodes[0])
	}
	return (
		<>
			<div className="main">
				<div className="mainSearch">
					<div className="logo">
						Unsplash - Images Search
					</div>
					<div className="searchBar">
						<input type="text" placeholder="Add The Keywords Here & Press Enter!" className="search"
						       onKeyDown={ handleEnter }/>
					</div>
				</div>
				<div className="mainContent" >
					{
						data?.results.map(item => {
							return (
								<div className="imgContainer" onMouseEnter={handleHoverStart}>
									<div className="hoverBtns" >Btn</div>
									<img src = {item.urls.small} alt="" className="img"/>
								</div>
							)
						})
					}
				</div>
				
			
			</div>
		</>
	)
}

export default App
