import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


export default class Application extends React.Component
{
    constructor(props)
    {
        super(props);

        this.onDragEnd = this.onDragEnd.bind(this);
        this.getItemStyle = this.getItemStyle.bind(this);
        this.getListStyle = this.getListStyle.bind(this);
        this.reorder = this.reorder.bind(this);
        this.state = {
            grid: 8,
            data: [
                [1, 'column11', 'column12', 'column13', 'column14', 'column15'],
                [2, 'column21', 'column22', 'column23', 'column24', 'column25'],
                [3, 'column31', 'column32', 'column33', 'column34', 'column35'],
                [4, 'column41', 'column42', 'column43', 'column44', 'column45'],
                [5, 'column51', 'column52', 'column53', 'column54', 'column55'],
                [6, 'column51', 'column52', 'column53', 'column54', 'column55'],
            ],
            collumns:
            [
                {id: 1, value: 'Id Column'},
                {id: 2, value: 'Column 22'},
                {id: 3, value: 'Column 333'},
                {id: 4, value: 'Column 4444'},
                {id: 5, value: 'Column 55555'},
                {id: 6, value: 'Column 666666'}
            ]
        }
    }
    render()
    {
        return (
            <div>
                <h1>Drag and Drop example</h1>
                <table style={{borderCollapse: 'collapse'}}>
                    <thead>
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId='droppable' direction='horizontal'>
                                {(provided, snapshot) =>
                                    (<tr ref={provided.innerRef} tyle={this.getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                                        {
                                            this.state.collumns.map((collumn, index) =>
                                            (
                                                <Draggable key={collumn.id} draggableId={collumn.id} index={index}>
                                                    {(provided, snapshot) =>
                                                    {
                                                        return <th 
                                                            key={collumn.id} 
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={this.getItemStyle(
                                                                snapshot.isDragging,
                                                                provided.draggableProps.style
                                                            )}>
                                                                {collumn.value}
                                                        </th>
                                                    }}
                                                </Draggable>

                                            ))
                                        }
                                    </tr>)                                    
                                }
                            </Droppable>
                        </DragDropContext>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((dataEntry, index) =>
                        {
                            return (
                                <tr key={index}>
                                    {
                                        dataEntry.map(entryField =>
                                        {
                                            return <td key={entryField} style={{borderTop: '1px solid black', padding: '10px'}}>{entryField}</td>
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
      );
    }

    onDragEnd(result)
    {
        // dropped outside the list
        if (!result.destination) {
            return;
        }
    
        const collumns = this.reorder(
            this.state.collumns,
            result.source.index,
            result.destination.index
        );
    
        this.setState({
            ...this.state,//rows data can dissapear after commenting this
            collumns,
        });
    }

    reorder(list, startIndex, endIndex)
    {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
      
        return result;
    };

    getItemStyle(isDragging, draggableStyle)
    {
        return {
            // some basic styles to make the items look a bit nicer
            userSelect: 'none',
            padding: this.state.grid * 2,
            margin: `0 ${this.state.grid}px 0 0`,
          
            // change background colour if dragging
            background: isDragging ? 'lightgreen' : 'grey',
          
            // styles we need to apply on draggables
            ...draggableStyle,
        }
    };

    getListStyle(isDraggingOver)
    {
        return {
            background: isDraggingOver ? 'lightblue' : 'lightgrey',
            display: 'flex',
            padding: this.state.grid,
            overflow: 'auto',
        }
    };
};
