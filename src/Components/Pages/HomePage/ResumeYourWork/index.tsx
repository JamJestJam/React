import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
//Components
import DropDown from "Components/Common/DropDown";
import Search from "Components/Common/Input/Search";
import SingleComment from "./Comment";
//Data
import { IconType } from "Components/Common/Icon/IconType";
//style
import * as CSS from "./css";
import * as Controls from "StyledHelpers/Controls";
import { IconSize } from "Components/Common/Icon/IconSize";
//interface
import IState from "Reduces/IState";
import ICommentReducer from "Reduces/comment/ICommentReducer";

const commentPerPage = 8;

const ResumeYourWork: FC = () => {
    const { comments } = useSelector<IState, ICommentReducer>((GS) => ({
        ...GS.comments,
    }));

    const [state, setState] = useState({
        page: 0,
        maxPage: 0,
        data: [...comments],
        filtered: false,
    });

    const setPage = (page: number) => {
        if(page<0 || page>state.maxPage)
            return;

        setState({
            ...state,
            page: page,
        });
    };

    useEffect(() => {
        const max = Math.floor(state.data.length / commentPerPage);
        setState({
            ...state,
            maxPage: max,
            data: comments,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comments]);

    return (
        <>
            <Controls.TriangleConent>
                <Controls.TriangleConentLeft>
                    <CSS.TitleS>Resume your work</CSS.TitleS>
                </Controls.TriangleConentLeft>
                <Controls.TriangleConentRight>
                    <Search
                        Label="Filter by title"
                        Button={true}
                        Border={true}
                        Width={100}
                        FontSize="12"
                        IconSize={IconSize.Mini}
                    ></Search>
                    <DropDown
                        LeftIcon={IconType.bell}
                        Text="Followed"
                    ></DropDown>
                </Controls.TriangleConentRight>
            </Controls.TriangleConent>
            <div>
                {state.data
                    .slice(
                        state.page * commentPerPage,
                        state.page * commentPerPage + commentPerPage
                    )
                    .map((element, i) => {
                        return (
                            <SingleComment
                                Title={element.name}
                                Body={element.body}
                                key={i}
                            />
                        );
                    })}
            </div>
            <CSS.PagginationS>
                <CSS.PagginationElement disable={state.page===0} onClick={() => {setPage(state.page - 1);}}>Previous</CSS.PagginationElement>

                <CSS.PagginationEle onClick={() => {setPage(0);}}>1</CSS.PagginationEle>

                <CSS.PagginationEle>{state.page+1}</CSS.PagginationEle>

                <CSS.PagginationEle onClick={() => {setPage(state.maxPage);}}>{state.maxPage + 1}</CSS.PagginationEle>

                <CSS.PagginationElement disable={state.page === state.maxPage} onClick={() => {setPage(state.page + 1);}}>Next</CSS.PagginationElement>
            </CSS.PagginationS>
        </>
    );
};

export default ResumeYourWork;
