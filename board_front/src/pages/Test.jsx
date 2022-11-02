import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_BOARD, GET_USER } from "../gql/home.gql";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import Pagination from "../components/Pagination";
import "./Test.css";

const Test = () => {
  const navigate = useNavigate();

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="first-tr">
            <th colspan="5">Atividades do projeto</th>
          </tr>
          <tr className="">
            <th>#</th>
            <th colspan="2">Atividade</th>
            <th colSpan="1"> hi </th>
            <th colSpan="1"> bye </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td">1</td>
            <td className="td">Atualizar página da equipe</td>
            <td className="last-child">
              <i class="material-icons button edit">edit</i>
              <i class="material-icons button delete">delete</i>
            </td>
            <td className="td">s</td>
            <td className="td">a</td>
          </tr>
          <tr>
            <td className="td">2</td>
            <td className="td">Design da nova marca</td>
            <td className="last-child">
              <i class="material-icons button edit">edit</i>
              <i class="material-icons button delete">delete</i>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td className="td">Encontrar desenvolvedor front-end</td>
            <td className="last-child">
              <i class="material-icons button edit">edit</i>
              <i class="material-icons button delete">delete</i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Test;
