/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.application.views.ry;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;

/**
 *
 * @author Rizki Yuwanda <yuwanda.rizki@gmail.com> for build war package in
 * project -> run maven -> goals -> package -Pproduction
 */
@PageTitle("RY")
@Route(value = "ry", layout = MainLayout.class)
@Tag("ry-view")
@JsModule("./views/ry/ry-view.ts")
public class RyView extends LitTemplate {


    public RyView() {
    }
}

