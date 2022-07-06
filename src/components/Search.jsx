import React from 'react'

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFilter = (event) => {
        if (this.state.search === '') {
            this.setState({ search: 'pirates' })
        }
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type)
            }
        )
    }

    render() {
        return (
            <div className='row '>
                <div className='input-field col s6 '>
                    <input
                        id='no-border'
                        className=' #e0f7fa cyan lighten-5'
                        placeholder='Search'
                        type='search'
                        value={this.state.search}
                        onChange={(e) => {
                            this.setState({ search: e.target.value })
                        }}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className='btn cyan lighten-1 seach-btn'
                        onClick={(e) =>
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type
                            )
                        }
                    >
                        {' '}
                        Search
                    </button>
                </div>
                <div className='radio-btns-wrap'>
                    <p>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='all'
                                onChange={this.handleFilter}
                                checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='movie'
                                onChange={this.handleFilter}
                                checked={this.state.type === 'movie'}
                            />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='series'
                                onChange={this.handleFilter}
                                checked={this.state.type === 'series'}
                            />
                            <span>Series only</span>
                        </label>
                    </p>
                </div>
            </div>
        )
    }
}

export { Search }
