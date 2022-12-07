import React, { useEffect } from 'react'
import BookCard from '../components/BookCard'
import { v4 as uuidv4 } from 'uuid'
import Slider from '../components/Slider'
import { useBooks } from '../hooks/useBooks'
import Loading from '../components/Loading'
import bookService from '../services/bookService'
import { useState } from 'react'

export default function Home() {
	// const books = useBooks()
	const [books, setBooks] = useState([])
	const [bestSellerBook, setBestSellerBook] = useState([])
	
	const fetchNewBook = async() => {
		const data = await bookService.getNewBook()
		setBooks(data.data.book)
	}
	const fetchBestSeller = async() => {
		const data = await bookService.getBestSellerBook()
		setBestSellerBook(data.data.book)
	}
	

	useEffect(() => {
		// scroll to top when access this page
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		document.title = 'BookShop - Trang chủ'
		fetchNewBook()
		fetchBestSeller()
	}, [])

	console.log(books)

	return (
		<main className='homepage pb-20 bg-white rounded-xl'>
			<div className='p-10 w-full h-9/12 sm:h-1/12 m-auto'>
				<Slider />
			</div>
			<div className='wrapper divide-y'>
				<div className='p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8'>
					<h2 className='text-2xl lg:text-3xl font-bold text-center pt-5 col-span-full'>
						Mới nhất
					</h2>
					{books ? (
						books.map((book) => (
							<BookCard key={uuidv4()} {...book} thumbnailUrl={book.imageUrl} />
						))
					) 
					: 
					(
						<div className='col-span-full'>
							<Loading/>
						</div>
					)}
				</div>

				<div className='px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5'>
					<h2 className='text-3xl font-bold text-center pt-5 col-span-full'>
						Bán chạy nhất
					</h2>
					{bestSellerBook ? (
						bestSellerBook.map((book) => (
							<BookCard key={uuidv4()} {...book} thumbnailUrl={book.imageUrl} />
						))
					) 
					: 
					(
						<div className='col-span-full'>
							<Loading/>
						</div>
					)}
				</div>
			</div>
		</main>
	)
}
